export const getPosts = async (url) => {
  try {
    
    const response = await fetch(url);
    if(!response.ok) throw new Error('요청을 실패했습니다');
    
    const data = await response.json();
    
    return data;

  } catch(error) {

    console.error(error);

  }
}