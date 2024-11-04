function choice(arr) {
  if (!Array.isArray(arr) || arr.length === 0) {
    // Eğer geçerli bir dizi değilse veya dizi boşsa, hata mesajı döndürür.
    console.warn("choice fonksiyonu boş bir dizi aldı veya dizi değil!");
    return null; // Alternatif olarak, istenirse varsayılan bir değer dönebilir.
  }
  const randomIndex = Math.floor(Math.random() * arr.length);
  return arr[randomIndex];
}

export { choice };
