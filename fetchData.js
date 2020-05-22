
import axios from 'axios'

export const fetchData = (fn)=> {
    axios.get('http://a.jspang.com/jestTest.json').then((res) => {
        fn(res.data)
    })
}
export const fetchTwoData = () => {
   return axios.get('http://a.jspang.com/jestTest.json')
}
export const fetchThreeData = () => {
    return axios.get('http://a.jspang.com/jestTest_error.json')
 }