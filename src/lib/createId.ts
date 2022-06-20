let id: number = parseInt(window.localStorage.getItem("idMax") || "0") || 0;

export const createId = () => {
  id++;
  window.localStorage.setItem("idMax", id.toString());
  return id;
};
