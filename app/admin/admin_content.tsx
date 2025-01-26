"use client";

import { useState } from "react";

interface Project {
  id: number;
  image: string;
  description: string;
  tags: string[];
}

interface FormData {
  image: string;
  description: string;
  tags: string;
}

export default function AdminContent() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [drafts, setDrafts] = useState<Project[]>([]);
  const [formData, setFormData] = useState<FormData>({
    image: "",
    description: "",
    tags: "",
  });
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setFormData({ ...formData, image: URL.createObjectURL(file) });
    }
  };

  const handleSaveProject = (isDraft: boolean) => {
    const newProject: Project = {
      ...formData,
      tags: formData.tags.split(",").map((tag) => tag.trim()),
      id: Date.now(),
    };

    if (isDraft) {
      setDrafts([...drafts, newProject]);
    } else {
      setProjects([...projects, newProject]);
    }

    setFormData({ image: "", description: "", tags: "" });
    setIsPopupOpen(false);
  };

  const handleDeleteProject = (id: number, isDraft: boolean) => {
    if (isDraft) {
      setDrafts(drafts.filter((draft) => draft.id !== id));
    } else {
      setProjects(projects.filter((project) => project.id !== id));
    }
  };

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Project Upload</h1>

      <button
        onClick={() => setIsPopupOpen(true)}
        className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600"
      >
        Upload Project
      </button>

      {isPopupOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96">
            <h2 className="text-xl font-bold mb-4">Upload New Project</h2>
            <div className="grid gap-4">
              <div>
                <label className="block text-sm font-medium mb-1">
                  Project Image
                </label>
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageUpload}
                />
                {formData.image && (
                  <img
                    src={formData.image}
                    alt="Preview"
                    className="mt-2 w-32 h-32 object-cover rounded-lg"
                  />
                )}
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">
                  Description
                </label>
                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleInputChange}
                  rows={4}
                  className="w-full border rounded-md p-2"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">Tags</label>
                <input
                  name="tags"
                  value={formData.tags}
                  onChange={handleInputChange}
                  placeholder="e.g., React, Tailwind, Next.js"
                  className="w-full border rounded-md p-2"
                />
              </div>

              <div className="flex gap-4">
                <button
                  onClick={() => handleSaveProject(true)}
                  className="bg-gray-400 text-white px-4 py-2 rounded-md hover:bg-gray-500"
                >
                  Save as Draft
                </button>
                <button
                  onClick={() => handleSaveProject(false)}
                  className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
                >
                  Publish
                </button>
              </div>
              <button
                onClick={() => setIsPopupOpen(false)}
                className="mt-4 text-gray-500 underline"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      <div>
        <h2 className="text-xl font-semibold mb-4">Uploaded Projects</h2>
        <div className="grid gap-4">
          {projects.map((project) => (
            <div key={project.id} className="border p-4 rounded-lg">
              <img
                src={project.image}
                alt="Project"
                className="w-full h-48 object-cover rounded-lg mb-2"
              />
              <p>{project.description}</p>
              <p className="text-sm text-gray-500">
                Tags: {project.tags.join(", ")}
              </p>
              <button
                onClick={() => handleDeleteProject(project.id, false)}
                className="mt-2 bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600"
              >
                Delete
              </button>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-8">
        <h2 className="text-xl font-semibold mb-4">Drafts</h2>
        <div className="grid gap-4">
          {drafts.map((draft) => (
            <div key={draft.id} className="border p-4 rounded-lg">
              <img
                src={draft.image}
                alt="Draft"
                className="w-full h-48 object-cover rounded-lg mb-2"
              />
              <p>{draft.description}</p>
              <p className="text-sm text-gray-500">
                Tags: {draft.tags.join(", ")}
              </p>
              <button
                onClick={() => handleDeleteProject(draft.id, true)}
                className="mt-2 bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600"
              >
                Delete
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
