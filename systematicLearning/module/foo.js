let _name, _age;
let name = '', age = 0;

//模块对象的构造函数
let foo = function(name,age) {
            _name = name;
            _age = age
        }
//获取私有变量_name的变量值
foo.prototype.GetName = function () {
    return _name

};

//设置私有变量_name的变量值
foo.prototype.SetName = function(name) {
    _name = name
    console.log(module.loaded)
}

//获取私有变量_age的变量值
foo.prototype.GetAge = function() {
    return _age
}
//设置私有变量_age的变量值
foo.prototype.SetAge = function (age) {
    _age = age
};


//定义类变量
foo.staticName = ''
//定义类函数
foo.staticFunction = function() {
    console.log(foo.staticName)
}






foo.prototype.name = name;
foo.prototype.age = age;
foo.prototype.ModuleId = function () {
    console.log(module.id)
    module.id = 'foo'
    console.log(module.id)//为当前模块的ID
    console.log(module.filename)//当前模块文件的文件名
    console.log(module.loaded)//属性值为true时表示模块加载完毕
    console.log(module.parent)//当前模块的父模块对象
};

module.exports = foo;


