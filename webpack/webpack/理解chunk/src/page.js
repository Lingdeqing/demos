import * as R from "ramda"
import dep1 from "./dep1"
import dep2 from "./dep2"
export default function(){
    R.omit(['a'], {a:1})
    dep1()
    dep2()
    return 'pageModule'
}