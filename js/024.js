{
    var EventHub_1 = /** @class */ (function () {
        function EventHub() {
            this.cache = {};
        }
        EventHub.prototype.on = function (eventName, fn) {
            this.cache[eventName] = this.cache[eventName] || [];
            this.cache[eventName].push(fn);
        };
        EventHub.prototype.emit = function (eventName) {
            var _this = this;
            var args = [];
            for (var _i = 1; _i < arguments.length; _i++) {
                args[_i - 1] = arguments[_i];
            }
            if (!this.cache[eventName])
                return;
            this.cache[eventName].forEach(function (fn) {
                fn.apply(_this, args);
            });
        };
        EventHub.prototype.off = function (eventName, fn) {
            var index = this.cache[eventName].indexOf(fn);
            if (index === -1)
                return;
            this.cache[eventName].splice(index, 1);
        };
        return EventHub;
    }());
    var test = function () {
        var eventHub = new EventHub_1();
        var flag = false;
        var fn1 = function (x, y) {
            console.log('fn1', x + y);
        };
        var fn2 = function () {
            flag = true;
        };
        var handle = function () {
            eventHub.on('test1', fn1);
            eventHub.on('test2', fn2);
        };
        handle();
        eventHub.emit('test1', 1, 2);
        eventHub.off('test2', fn2);
        eventHub.emit('test2');
        console.log(flag);
    };
    test();
}
