const formatOnlyText = (text: string) => {
  if (!text) return;

  const formatedText = text.replace(/(<([^>]+)>)/gi, "");
  return formatedText;
};

export default formatOnlyText;
