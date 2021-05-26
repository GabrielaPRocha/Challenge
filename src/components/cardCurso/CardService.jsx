import ApiAxios from '../ApiAxios';
export const getCards = async() =>
{
  const response = await  ApiAxios ('/Pgprinc')
  return response.data
} 
export const postForm = async({datainicio,datafim,curso}) =>
{
  const status = 1
  const response = await  ApiAxios.post('/Pgprinc',({datainicio,datafim,curso}))
  return response.data
}