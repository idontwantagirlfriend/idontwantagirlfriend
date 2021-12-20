import db from "./json/db.json";

function getTextData(index) {
  const error404Message = {
    content: `The requested text with the index ${index} could not be found.`,
  };
  return db.length > index ? db[index] : error404Message;
}

export default getTextData;
