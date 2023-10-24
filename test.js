var mo = {
    name : "nguyen van a",
    lop : "123",
    getname: function() {
        return this.name
    } 
}
function User(name,lop,msv) {
    this.name = name
    this.lop = lop
    this.msv = msv
    this.getStr = function() {
        return this.name +' ' + this.lop +' ' + this.msv
    }
}
User.prototype.className = 'F8'
User.prototype.getname = function() {
    return this.name
}
var sv1 = new User('nguyen van a','d21dcn008','b21dcc123')
var sv2 = new User('nguyen van b','d21dcn008','b21dcc123')
console.log(sv1)
console.log(sv2.getname())