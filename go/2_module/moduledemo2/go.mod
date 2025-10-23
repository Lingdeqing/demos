module moduledemo2

go 1.25.0

require moduledemo1 v0.0.0

// replace 引用其他目录下的模块
replace moduledemo1 => ../moduledemo1
