function Background() {
  return (
    <>
      <div className="fixed inset-0 -z-50 bg-slate-950"></div>

      <div className="fixed top-0 left-0 w-[450px] h-[450px] bg-cyan-500/20 blur-[150px] rounded-full -z-40"></div>

      <div className="fixed bottom-0 right-0 w-[450px] h-[450px] bg-purple-600/20 blur-[150px] rounded-full -z-40"></div>

      <div className="fixed top-40 right-40 w-[250px] h-[250px] bg-blue-500/20 blur-[120px] rounded-full -z-40"></div>
    </>
  );
}

export default Background;