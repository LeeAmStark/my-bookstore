export default function About() {
  return (
    <>
      <Header />
      <div className="flex bg-indigo-100 w-full m-auto h-[500px]">
        <div className="flex m-auto justfy-center p-12">
          <div className="w-2/4 h-[450px] leading-relaxed bg-white border rounded-2xl p-6">
            <h2 className="text-xl text-orange-400 ">How it started</h2>
            <h1 className="font-bold text-5xl">
              Our Dream is Global Learning Transformation
            </h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel ad
              magnam quidem nobis mollitia tempora culpa, vero rem illo porro
              sit fugit quas, molestias quisquam ullam! Assumenda iste dolorem
              quidem.
            </p>
          </div>

          <div className="flex w-2/4 content-center">
            <img
              src="https://images.unsplash.com/photo-1431608660976-4fe5bcc2112c?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
              className="border rounded-xl"
            />
          </div>

          <div class="grid grid-cols-2 w-2/4 bg-gray-100 rounded-2xl">
            <div class="p-4">
              <h2 class="text-2xl font-bold">3.5</h2>
              <h3 class="text-xl">Years Experience</h3>
            </div>
            <div class="p-4">
              <h2 class="text-2xl font-bold">23</h2>
              <h3 class="text-xl">Project Challenge</h3>
            </div>
            <div class="p-4">
              <h2 class="text-2xl font-bold">830+</h2>
              <h3 class="text-xl">Positive Reviews</h3>
            </div>
            <div class="p-4">
              <h2 class="text-2xl font-bold">100K</h2>
              <h3 class="text-xl">Trusted Students</h3>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
