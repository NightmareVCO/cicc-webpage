  //dinamyc class
  let currentPath = location.hash;
  if (currentPath === "") currentPath = "#";

  //get the current path by searching wiht query in the href of the a element with id link
  const currentHref = (document.querySelector("#link"))
    .href.split("/").pop();
  //this arrives http://localhost:4321/# but need #;
  const isActive = currentPath === currentHref;
  console.log(currentHref);
  const liClasses =
    (isActive && "bg-secondary text-white rounded-full shadow") || "text-white";
  const aClasses = isActive
    ? "block px-3 py-1 transition-colors text-white md:text-white"
    : "block px-3 py-1 transition-all text-primary hover:text-secondary md:text-white md:hover:text-secondary md:hover:mt-[-3px]";

  //add the classes dinamically
  (document.querySelector("li")).classList.add(
    ...liClasses.split(" ")
  );
  (document.querySelector("a")).classList.add(
    ...aClasses.split(" ")
  );