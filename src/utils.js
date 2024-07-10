export const printNotes = (notes) => {
  notes.forEach(({ id, content, tags }) => {
    console.log("id:", id);
    console.log("content:", content);
    console.log("tags:", tags.join(", "), "\n");
  });
};
