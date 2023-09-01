export function splitIntoSentences(text: string) {
  const sentenceEndings = /[.!?]/;

  const sentences = text.split(sentenceEndings);

  const cleanedSentences = sentences.filter(sentence => sentence.trim() !== '');

  return cleanedSentences;
}


export function localSet<T>(key: string, item: T){
  localStorage.setItem(key, JSON.stringify(item))
}

export function localGet<T>(key: string): T|null {
  const item = localStorage.getItem(key)
  if(item) {
    return JSON.parse(item)
  }
  return null
}