import * as R from "ramda"
import dep1 from "./dep1"
export default function(){
    R.omit(['a'], {a:1})
    dep1()
    return 'pageModule'
}