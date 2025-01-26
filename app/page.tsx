import profile from "../public/profile.jpg";

export default function Home() {
  return (
    <div className="">
      <main className="">
        {/* banner */}
        <section className="min-h-[55vh] rounded-b-[5em] pt-[3em] pb-[6rem] w-full bg-accent space-y-8">
          <div className="relative w-[10em] mx-auto">
            <div className="h-[10em] w-[10em] rounded-full border-4 border-background overflow-clip object-cover">
              <img src={profile.src} alt="profile image h-full w-full" />
            </div>
            <h1 className="bg-background px-4 py-2 rounded-full w-max absolute top-8 -right-28 -rotate-6">
              Divinewisdom 👋
            </h1>
          </div>
          <h2 className="text-2xl w-[35%] text-center mx-auto">
            Fullstack Web Developer developing centralized and decentralized
            platforms for brands and buisnesses
          </h2>
          <button className="px-6 py-4 mx-auto rounded-full flex space-x-3 bg-foreground text-white w-max">
            <p>Get in touch </p>
            <span>📬</span>
          </button>
        </section>
        {/* programming langs */}
        <section className="px-[100px] py-[8rem] rounded-b-[5em] relative z-10 bg-background">
          <div className="w-min flex space-x-16 mx-auto">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-[5rem] w-[5rem]"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M18.323 9.007c-.226-.033-.42-.13-.646-.194c.033-.129.033-.258.097-.452c.452-2.322.13-4.16-.903-4.806c-1.032-.58-2.71.032-4.387 1.484c-.13.129-.355.258-.484.451c-.097-.096-.226-.193-.323-.322c-1.774-1.58-3.516-2.226-4.612-1.613c-1.033.58-1.355 2.355-.904 4.516c.033.226.097.452.13.645c-.226.033-.485.13-.71.226C3.484 9.684 2 10.878 2 12.007c0 1.225 1.58 2.451 3.742 3.16c.193.033.355.13.548.13c-.032.226-.129.451-.129.71c-.42 2.129-.096 3.838.936 4.419c1.032.645 2.838 0 4.516-1.548c.129-.13.258-.226.42-.355a4 4 0 0 0 .548.451c1.613 1.452 3.29 2.033 4.355 1.452c1.032-.645 1.387-2.452.935-4.71c-.032-.129-.032-.354-.13-.548c.13-.032.227-.032.356-.13C20.355 14.362 22 13.137 22 11.91c-.032-1-1.58-2.161-3.677-2.903m-5.29-3.29c1.45-1.259 2.806-1.71 3.45-1.388c.646.355.904 1.903.485 3.936c-.032.129-.032.225-.097.419c-.871-.194-1.71-.355-2.613-.42c-.484-.709-1.032-1.45-1.613-2.032a1.8 1.8 0 0 1 .387-.516M8.547 14.07c.194.355.42.678.646 1a10.6 10.6 0 0 1-1.807-.258a8 8 0 0 1 .645-1.71c.13.29.355.678.516.968m-1.16-4.645a22 22 0 0 1 1.773-.323c-.226.323-.42.646-.58 1c-.162.355-.355.646-.549 1.033c-.29-.613-.451-1.162-.645-1.71m1.031 2.677c.226-.548.549-1.032.871-1.58c.323-.549.645-1.033.936-1.549c.58-.032 1.161-.032 1.774-.032c.58 0 1.226.032 1.774.032c.355.484.645 1 .936 1.484c.322.484.58 1.033.87 1.58c-.225.55-.548 1.033-.87 1.582c-.323.548-.646 1.032-.936 1.548c-.58.032-1.161.032-1.806.032s-1.226-.032-1.774-.032c-.355-.484-.646-1-.936-1.548c-.29-.549-.548-.968-.839-1.517m7.033 1.968c.193-.355.354-.677.548-1.032c.226.548.452 1.129.645 1.71c-.58.129-1.226.225-1.87.322c.257-.322.483-.677.677-1m.58-2.968c-.193-.354-.355-.677-.548-1.032s-.42-.645-.58-.935a22 22 0 0 1 1.773.322c-.193.549-.419 1.097-.645 1.645M12 6.75c.42.451.774.903 1.129 1.387a28 28 0 0 0-2.322 0c.419-.516.838-.968 1.193-1.387M7.484 4.36c.645-.354 2.129.13 3.613 1.549c.097.097.193.193.322.258c-.58.645-1.129 1.355-1.677 2.032a23 23 0 0 0-2.613.42c-.032-.194-.097-.42-.129-.581c-.355-1.903-.129-3.323.484-3.678M6.58 14.62c-.13-.033-.323-.097-.484-.13a7.2 7.2 0 0 1-2.484-1.225c-.452-.323-.678-.71-.774-1.162c0-.71 1.258-1.612 3.032-2.258c.226-.096.452-.129.677-.225c.258.87.581 1.677.936 2.483c-.323.807-.678 1.613-.903 2.517m4.484 3.774a7.1 7.1 0 0 1-2.226 1.355a1.54 1.54 0 0 1-1.355.032c-.645-.355-.871-1.71-.549-3.58c.033-.227.097-.452.13-.646c.87.194 1.774.323 2.612.355c.484.71 1.097 1.451 1.678 2.097c-.032.193-.162.29-.29.387m.967-.903c-.42-.452-.774-.904-1.161-1.388c.355 0 .71.033 1.129.033s.806 0 1.161-.033c-.354.42-.71.871-1.129 1.387m5.097 1.128c-.032.452-.258.936-.645 1.226c-.645.355-1.936-.096-3.355-1.354c-.129-.13-.322-.259-.484-.452a17 17 0 0 0 1.613-2.097c.903-.032 1.774-.226 2.613-.42c.032.13.032.323.097.452c.226.904.226 1.807.161 2.645m.71-4.16c-.097.032-.226.032-.355.096c-.258-.871-.645-1.677-1-2.484c.355-.774.677-1.613.935-2.451c.226.032.42.129.581.193c1.806.645 3.064 1.548 3.064 2.258c.033.742-1.29 1.742-3.225 2.387M12 13.844c1 0 1.774-.806 1.774-1.774A1.79 1.79 0 0 0 12 10.297c-.935 0-1.774.806-1.774 1.774S11 13.845 12 13.845"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-[5rem] w-[5rem]"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M6 3a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V6a3 3 0 0 0-3-3zm7.334 13.055q1.08.87 2.156.858q.66 0 1.012-.242a.75.75 0 0 0 .341-.66a.97.97 0 0 0-.34-.748q-.352-.307-1.332-.616q-1.177-.34-1.815-.88q-.626-.54-.638-1.507q0-.913.792-1.529q.77-.616 1.97-.616q1.672 0 2.683.814l-.77 1.199a2.6 2.6 0 0 0-.935-.462a3.2 3.2 0 0 0-.946-.165q-.57 0-.913.209q-.34.21-.34.55q0 .374.417.638q.42.254 1.43.561q1.221.363 1.738.968t.517 1.54q0 .957-.737 1.65q-.726.682-2.112.715q-1.815 0-3.036-1.089zm-5.53.638q.352.22.847.22q.517 0 .858-.297q.34-.308.341-1.067v-5.302h1.485v5.588q-.033 1.298-.748 1.87a2.5 2.5 0 0 1-.891.484a3.3 3.3 0 0 1-.935.143q-.825 0-1.463-.286q-.682-.307-1.144-1.089l1.034-.847q.285.385.616.583"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-[5rem] w-[5rem]"
              viewBox="0 0 512 104"
            >
              <path d="M429.543.043v16.46h-35.377V103.1h-17.69V16.504h-36.114V.043zm3.977 93.24c1.246 0 2.336.448 3.259 1.346c.936.897 1.402 1.972 1.415 3.224a4.5 4.5 0 0 1-.66 2.327a4.8 4.8 0 0 1-1.714 1.665a4.4 4.4 0 0 1-2.3.626c-1.296 0-2.398-.449-3.32-1.346c-.923-.898-1.38-1.985-1.368-3.272q-.017-1.878 1.368-3.224c.922-.898 2.024-1.346 3.32-1.346M82.916 103.1L17.69 22.028v81.03H0V0h22.111l82.406 102.329l.001-85.825l-.007-16.461h89.18v16.46h-71.484v26.48h57.488v16.461h-57.488V86.64h71.485v16.46zm167.469-43.813L261.978 73.7l-23.755 29.522h-23.215zM238.223.086l29.93 37.17L297.989.2l23.15-.035l-41.396 51.485l41.463 51.493h-23.217L215.074.086zm225.488 58.97h7.838v30.2c-.011 2.775-.612 5.148-1.785 7.145c-1.187 1.995-2.83 3.519-4.938 4.594c-2.098 1.062-4.555 1.606-7.348 1.606c-2.553 0-4.841-.46-6.879-1.358s-3.655-2.244-4.842-4.016c-1.2-1.771-1.787-3.98-1.787-6.625h7.852c.012 1.157.275 2.16.778 3a5 5 0 0 0 2.086 1.924q1.348.675 3.091.674c1.26 0 2.338-.26 3.213-.792q1.312-.78 2.014-2.338c.455-1.028.695-2.303.707-3.815zm40.09 11.81c-.19-1.83-1.03-3.26-2.492-4.275c-1.475-1.028-3.38-1.535-5.718-1.535c-1.64 0-3.055.248-4.23.732c-1.174.496-2.085 1.157-2.709 1.996c-.622.838-.934 1.795-.959 2.87c0 .897.216 1.677.635 2.326a5.2 5.2 0 0 0 1.714 1.666a11.5 11.5 0 0 0 2.398 1.145q1.33.46 2.66.78l4.087 1.004c1.643.378 3.237.885 4.759 1.535c1.521.638 2.9 1.453 4.11 2.433q1.817 1.47 2.877 3.543c.707 1.382 1.067 3 1.067 4.866c0 2.515-.647 4.724-1.954 6.637c-1.306 1.902-3.188 3.39-5.657 4.465c-2.457 1.063-5.43 1.606-8.929 1.606c-3.38 0-6.328-.52-8.81-1.559c-2.492-1.027-4.434-2.54-5.837-4.524s-2.157-4.405-2.265-7.251h7.768c.107 1.488.587 2.728 1.402 3.732c.826.992 1.905 1.724 3.224 2.22c1.33.485 2.816.733 4.458.733c1.714 0 3.224-.26 4.53-.768c1.295-.508 2.313-1.216 3.045-2.138c.743-.91 1.115-1.984 1.127-3.212c-.012-1.122-.349-2.055-.996-2.788q-.989-1.098-2.733-1.842c-1.173-.496-2.54-.945-4.098-1.334l-4.962-1.252c-3.584-.91-6.424-2.291-8.498-4.146c-2.085-1.854-3.116-4.31-3.116-7.393c0-2.527.695-4.748 2.098-6.65c1.39-1.9 3.296-3.377 5.705-4.428c2.42-1.063 5.154-1.583 8.197-1.583c3.093 0 5.801.52 8.139 1.583c2.336 1.051 4.171 2.515 5.5 4.381c1.331 1.867 2.027 4.004 2.063 6.425z" />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-[5rem] w-[5rem]"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M19.125 7.448a.7.7 0 0 1-.456.18H2.644c-.569 0-.856-.65-.462-1.03L4.814 4.06a.67.67 0 0 1 .455-.188h16.088c.574 0 .855.656.456 1.038zm0 12.506a.7.7 0 0 1-.456.175H2.644c-.569 0-.856-.645-.462-1.026l2.632-2.544a.66.66 0 0 1 .455-.181h16.088c.574 0 .855.65.456 1.031zm0-9.651a.7.7 0 0 0-.456-.175H2.644c-.569 0-.856.645-.462 1.025l2.632 2.545a.7.7 0 0 0 .455.18h16.088c.574 0 .855-.65.456-1.03z"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-[5rem] w-[5rem]"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="m23.835 11.703l-1.008-.623l-.028-.294l.866-.807a.348.348 0 0 0-.116-.578l-1.106-.414a9 9 0 0 0-.087-.285l.69-.96a.346.346 0 0 0-.226-.544l-1.166-.19a9 9 0 0 0-.14-.261l.49-1.076a.34.34 0 0 0-.028-.336a.35.35 0 0 0-.3-.154l-1.185.041a7 7 0 0 0-.188-.227l.273-1.153a.347.347 0 0 0-.417-.417l-1.153.273l-.228-.188l.041-1.184a.344.344 0 0 0-.49-.328l-1.076.49l-.262-.14l-.19-1.167a.348.348 0 0 0-.545-.226l-.96.69a9 9 0 0 0-.285-.086L14.597.453a.348.348 0 0 0-.578-.116l-.807.867a9 9 0 0 0-.294-.028L12.295.168a.346.346 0 0 0-.59 0l-.623 1.008l-.294.028L9.98.337a.346.346 0 0 0-.578.116l-.414 1.106l-.285.086l-.959-.69a.348.348 0 0 0-.545.226l-.19 1.167a9 9 0 0 0-.262.14l-1.076-.49a.346.346 0 0 0-.49.328l.041 1.184a8 8 0 0 0-.228.187l-1.153-.272a.347.347 0 0 0-.417.417l.271 1.153l-.186.227l-1.184-.042a.346.346 0 0 0-.328.49l.49 1.077a9 9 0 0 0-.14.262l-1.166.19a.348.348 0 0 0-.226.544l.69.958l-.087.286l-1.106.414a.348.348 0 0 0-.116.578l.866.807a9 9 0 0 0-.028.294l-1.008.623a.344.344 0 0 0 0 .59l1.008.623q.012.147.028.294l-.866.807a.346.346 0 0 0 .116.578l1.106.415q.042.144.087.285l-.69.959a.345.345 0 0 0 .227.544l1.166.19q.069.132.14.262l-.49 1.076a.346.346 0 0 0 .328.49l1.183-.041q.093.115.187.227l-.27 1.154a.346.346 0 0 0 .416.417l1.153-.272q.113.096.228.187l-.041 1.184a.344.344 0 0 0 .49.327l1.076-.49q.13.073.262.14l.19 1.167a.348.348 0 0 0 .545.227l.959-.69a9 9 0 0 0 .285.086l.414 1.107a.345.345 0 0 0 .578.115l.808-.865l.294.03l.623 1.006a.347.347 0 0 0 .59 0l.623-1.007q.148-.013.294-.03l.807.866a.348.348 0 0 0 .578-.115l.414-1.107a9 9 0 0 0 .285-.087l.959.69a.345.345 0 0 0 .545-.226l.19-1.166l.262-.14l1.076.49a.347.347 0 0 0 .49-.328l-.041-1.184a7 7 0 0 0 .227-.187l1.153.272a.347.347 0 0 0 .417-.416l-.272-1.155q.095-.112.187-.227l1.184.041a.344.344 0 0 0 .328-.49l-.49-1.076q.072-.13.141-.262l1.166-.19a.348.348 0 0 0 .226-.544l-.69-.959l.087-.285l1.106-.414a.346.346 0 0 0 .116-.579l-.866-.807q.016-.147.028-.294l1.008-.624a.344.344 0 0 0 0-.589zm-6.742 8.355a.714.714 0 0 1 .299-1.396a.714.714 0 1 1-.3 1.396zm-.342-2.314a.65.65 0 0 0-.771.5l-.358 1.669a8.7 8.7 0 0 1-3.619.78a8.7 8.7 0 0 1-3.695-.815L7.95 18.21a.65.65 0 0 0-.772-.5l-1.473.317a9 9 0 0 1-.761-.898h7.167c.081 0 .136-.014.136-.088v-2.536c0-.074-.054-.088-.136-.088h-2.096v-1.608h2.268c.206 0 1.106.059 1.393 1.209c.09.353.288 1.504.424 1.873c.134.413.683 1.238 1.268 1.238h3.572a1 1 0 0 0 .13-.013a9 9 0 0 1-.813.952zm-9.914 2.28a.714.714 0 1 1-.3-1.396a.714.714 0 0 1 .3 1.396M4.117 8.997a.714.714 0 1 1-1.303.58a.714.714 0 0 1 1.304-.58m-.834 1.981l1.534-.682a.65.65 0 0 0 .33-.858l-.316-.715h1.244v5.602H3.567a8.8 8.8 0 0 1-.284-3.348zm6.734-.543V8.784h2.96c.153 0 1.08.177 1.08.87c0 .574-.712.78-1.296.78zm10.757 1.486q0 .329-.024.651h-.9c-.09 0-.127.059-.127.148v.413c0 .973-.548 1.184-1.03 1.238c-.457.052-.964-.191-1.027-.472c-.27-1.518-.72-1.843-1.43-2.403c.882-.56 1.799-1.386 1.799-2.492c0-1.193-.82-1.945-1.377-2.315c-.783-.516-1.65-.62-1.883-.62H5.468a8.77 8.77 0 0 1 4.907-2.77l1.098 1.152a.65.65 0 0 0 .918.02l1.227-1.173a8.78 8.78 0 0 1 6.004 4.276l-.84 1.898a.65.65 0 0 0 .33.859l1.618.718q.042.43.042.872zm-9.3-9.6a.713.713 0 1 1 .984 1.032a.714.714 0 0 1-.984-1.031m8.339 6.71a.71.71 0 0 1 .939-.362a.714.714 0 1 1-.94.364z"
              />
            </svg>
          </div>
        </section>
        {/* services */}
        <section className="px-[100px] pt-[11rem] pb-[6rem] space-y-16 bg-accent relative left-0 -top-20 inset-10 rounded-b-[5em]">
          <h3 className="text-3xl text-center w-[30%] mx-auto">
            Collaborate to create high-end industy leading results
          </h3>
          <div className="w-[70%] mx-auto relative flex flex-col items-center justify-center">
            <hr className="border-1 absolute top-5 border-foreground opacity-20 rounded-full w-full" />
            <button className="px-10 py-2 bg-foreground text-background -rotate-6 rounded-full">
              Services
            </button>
          </div>
          <div className="flex space-x-10">
            <div className="space-y-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-12 w-12 text-foreground"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M1 3v2h22l-.01-1.993A2 2 0 0 0 21 1H3a2 2 0 0 0-2 2m3 1a1 1 0 1 1 1-1a1 1 0 0 1-1 1m3 0a1 1 0 1 1 1-1a1.004 1.004 0 0 1-1 1m5 6a4 4 0 1 0 4 4h-4Z"
                />
                <path
                  fill="currentColor"
                  d="M1 6v14a2 2 0 0 0 2 2h18a2 2 0 0 0 2-2V6Zm20 14H3V8h18Z"
                />
              </svg>
              <h4 className="text-xl opacity-85">UI & UX</h4>
              <p className="text-sm opacity-75">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus
                error eligendi dolorem qui porro, facere amet asperiores ad?
                Nihil illum perspiciatis voluptatem laudantium blanditiis illo,
                enim eum dolorum debitis delectus!
              </p>
            </div>
            <div className="space-y-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-12 w-12 text-foreground"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M11.5 3.311L19 7.653v8.694l-7.5 4.342L4 16.347V7.653zM11.5 1L2 6.5v11l9.5 5.5l9.5-5.5v-11z"
                />
                <path
                  fill="currentColor"
                  d="M11.5 5a.5.5 0 1 0 .5.5a.5.5 0 0 0-.5-.5m0 3.5a.5.5 0 1 0 .5.5a.5.5 0 0 0-.5-.5m0 3.5a.5.5 0 1 0 .5.5a.5.5 0 0 0-.5-.5M8 13a.5.5 0 1 0 .422.231A.5.5 0 0 0 8 13m-2.5 2a.5.5 0 1 0 .421.231a.5.5 0 0 0-.422-.23M15 13a.5.5 0 1 0 .269.079a.5.5 0 0 0-.269-.08M17.535 15a.5.5 0 1 0 .269.079a.5.5 0 0 0-.269-.079M3.382 6.225l-1 1.732l7.027 4.057l1-1.732zM12.5 17.016h-2v5.141h2z"
                />
              </svg>
              <h4 className="text-xl opacity-85">Web App Dev</h4>
              <p className="text-sm opacity-75">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus
                error eligendi dolorem qui porro, facere amet asperiores ad?
                Nihil illum perspiciatis voluptatem laudantium blanditiis illo,
                enim eum dolorum debitis delectus!
              </p>
            </div>
            <div className="space-y-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-12 w-12 text-foreground"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="m21.72 11.01l-4.01-7A1.97 1.97 0 0 0 15.98 3H8a1.97 1.97 0 0 0-1.73 1.01L4.74 6.68l-.8 1.39l-1.68 2.94A2.03 2.03 0 0 0 2 12a2 2 0 0 0 .26.99l1.68 2.94l.8 1.39l1.53 2.67A1.97 1.97 0 0 0 8 21h7.98a1.97 1.97 0 0 0 1.73-1.01l4.01-7a2 2 0 0 0 .26-.99a1.96 1.96 0 0 0-.26-.99m-4.384 5.974l.006-.004l-.004.007ZM20.28 12l-2.935 4.974c-.118.01-.234.026-.355.026A4.994 4.994 0 0 1 12 12.098v-.118A5.004 5.004 0 0 0 7 7a3 3 0 0 0-.31.03L7.89 5h8.26l4.14 7Z"
                />
              </svg>
              <h4 className="text-xl opacity-85">Design & Creative</h4>
              <p className="text-sm opacity-75">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus
                error eligendi dolorem qui porro, facere amet asperiores ad?
                Nihil illum perspiciatis voluptatem laudantium blanditiis illo,
                enim eum dolorum debitis delectus!
              </p>
            </div>
            <div className="space-y-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-12 w-12 text-foreground"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M12 8L9 9.75v3.5L12 15l3-1.75v-3.5Zm1.517 2.04l-1.53.892l-1.517-.885L12 9.155Zm-3.527.882l1.484.866v1.75l-1.484-.865Zm2.474 2.653v-1.767l1.546-.902v1.767ZM3 0L0 1.75v3.5L3 7l3-1.75v-3.5Zm1.517 2.04l-1.53.892l-1.517-.885L3 1.155ZM.99 2.921l1.484.866v1.75L.99 4.674Zm2.474 2.653V3.808l1.546-.902v1.767ZM3 17l-3 1.75v3.5L3 24l3-1.75v-3.5Zm1.517 2.04l-1.53.892l-1.517-.885L3 18.155Zm-3.527.882l1.484.866v1.75L.99 21.674Zm2.474 2.653v-1.767l1.546-.902v1.767ZM21 0l-3 1.75v3.5L21 7l3-1.75v-3.5Zm1.517 2.04l-1.53.892l-1.517-.885L21 1.155Zm-3.527.882l1.484.866v1.75l-1.484-.865Zm2.474 2.653V3.808l1.546-.902v1.767ZM21 17l-3 1.75v3.5L21 24l3-1.75v-3.5Zm1.517 2.04l-1.53.892l-1.517-.885l1.53-.892Zm-3.527.882l1.484.866v1.75l-1.484-.865Zm2.474 2.653v-1.767l1.546-.902v1.767ZM9 3h6v1H9zm0 17h6v1H9zM3.5 9v6h-1V9zm3.793-.172L5.172 6.707L5.879 6L8 8.12zM16 8.293l2.121-2.121l.707.707L16.707 9zm-7.872 6.586L6.007 17l-.707-.707l2.121-2.121zm8.751-.75L19 16.25l-.707.707l-2.121-2.121zM21.5 9v6h-1V9z"
                />
              </svg>
              <h4 className="text-xl opacity-85">Solana Smart Contract Dev</h4>
              <p className="text-sm opacity-75">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus
                error eligendi dolorem qui porro, facere amet asperiores ad?
                Nihil illum perspiciatis voluptatem laudantium blanditiis illo,
                enim eum dolorum debitis delectus!
              </p>
            </div>
          </div>
        </section>
        {/* projects */}
        <section className="px-[100px] space-y-18 w-full space-y-20 pt-[3rem] pb-[8rem] relative bg-background z-10 rounded-b-[5em]">
          <h3 className="text-3xl text-center w-[30%] mx-auto">
            Get to know me through my works
          </h3>
          <div className="w-[70%] mx-auto relative flex flex-col items-center justify-center">
            <hr className="border-1 absolute top-5 border-foreground opacity-20 rounded-full w-full" />
            <button className="px-10 py-2 bg-foreground text-background -rotate-6 rounded-full">
              Projects
            </button>
          </div>
          <div className="tags flex flex-wrap w-[70%] space-x-4 mx-auto justify-center items-center">
            <h5>tags: </h5>
            <button className="px-8 py-2 rounded-full border-2 bg-transparent text-xs">
              Personal Project
            </button>
            <button className="px-8 py-2 rounded-full border-2 bg-transparent text-xs">
              Rust
            </button>
            <button className="px-8 py-2 rounded-full border-2 bg-transparent text-xs">
              Solana
            </button>
            <button className="px-8 py-2 rounded-full border-2 bg-transparent text-xs">
              Web3
            </button>
          </div>
          <div className="grid grid-cols-2 gap-20">
            <div className="flex space-x-10">
              <div className="h-[8rem] min-w-[13rem] border-2 rounded-xl"></div>
              <div className="space-y-4">
                <h4 className="font-medium opacity-85">Project 1</h4>
                <p className="text-sm opacity-75">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Maiores, accusantium mollitia libero, natus veniam nihil
                  <span className="font-semibold hover:underline cursor-pointer">
                    {" "}
                    ...read more
                  </span>
                </p>
              </div>
            </div>
            <div className="flex space-x-10">
              <div className="h-[8rem] min-w-[13rem] border-2 rounded-xl"></div>
              <div className="space-y-4">
                <h4 className="font-medium opacity-85">Project 2</h4>
                <p className="text-sm opacity-75">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Maiores, accusantium mollitia libero, natus veniam nihil
                  <span className="font-semibold hover:underline cursor-pointer">
                    {" "}
                    ...read more
                  </span>
                </p>
              </div>
            </div>
            <div className="flex space-x-10">
              <div className="h-[8rem] min-w-[13rem] border-2 rounded-xl"></div>
              <div className="space-y-4">
                <h4 className="font-medium opacity-85">Project 3</h4>
                <p className="text-sm opacity-75">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Maiores, accusantium mollitia libero, natus veniam nihil
                  <span className="font-semibold hover:underline cursor-pointer">
                    {" "}
                    ...read more
                  </span>
                </p>
              </div>
            </div>
            <div className="flex space-x-10">
              <div className="h-[8rem] min-w-[13rem] border-2 rounded-xl"></div>
              <div className="space-y-4">
                <h4 className="font-medium opacity-85">Project 4</h4>
                <p className="text-sm opacity-75">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Maiores, accusantium mollitia libero, natus veniam nihil
                  <span className="font-semibold hover:underline cursor-pointer">
                    {" "}
                    ...read more
                  </span>
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="bg-accent relative left-0 -mt-20 px-[50px] pt-52 space-y-20 border-2">
        {/* contact */}
        <div className="space-y-10">
          <h2 className="text-4xl text-center w-[30%] mx-auto">
            Tell me what you want for you next project
          </h2>
          <div className="flex space-x-6 mx-auto w-[30%]">
            <button className="px-8 py-3 mx-auto rounded-full flex space-x-3 bg-foreground text-white w-max">
              <span>📬</span>
              <p>Email me</p>
            </button>
            <button className="px-8 py-3 mx-auto rounded-full flex space-x-3 bg-foreground text-white w-max">
              <span>💬</span>
              <p>Whatsapp</p>
            </button>
          </div>
        </div>
        {/* line */}
        {/* footer */}
        <section className=" w-full text-sm">
          <hr className="border border-foreground rounded-full opacity-10" />
          <div className="flex justify-between py-10">
            <p>&copy; 2025 All rights reserved</p>

            <div className="flex space-x-3">
              <p className="cursor-pointer">LinkedIn</p>
              <p>/</p>
              <p className="cursor-pointer">Twitter(X)</p>
              <p>/</p>
              <p className="cursor-pointer">Instagram</p>
            </div>
          </div>
        </section>
      </footer>
    </div>
  );
}
