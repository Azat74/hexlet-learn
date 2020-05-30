const filePaths = /* список путей до файлов */

// Эта функция принимает на вход необязательное значение,
// которое появится в promise.then((<тут>) => ...)
// Начальное значение в данном случае – массив,
// в котором накапливаются данные из файлов
const initPromise = Promise.resolve([])

// В then отдается функция, а не ее вызов!
const promise = filePaths.reduce((acc, path) => {
  // Аккумулятор – всегда промис внутри которого массив с содержимым файлов
  const newAcc = acc.then((contents) =>
    // Читаем файл и добавляем его данные в аккумулятор
    fs.readFile(path).then((data) => contents.concat(data)))
  return newAcc
}, initPromise)

// Если надо, продолжаем обработку
promise.then((contents) => /* обрабатываем все данные полученные из файлов */)
