/**
 * System module - Datetime computation.
 */
var module_system_clockInterval = function () {
    var module_system_clockNewDate = new Date();
    var module_system_clockDate = module_system_clockNewDate.toDateString();
    var module_system_clockTime = module_system_clockNewDate.toLocaleTimeString();
    document.getElementById('module_system_clockDate').innerHTML = module_system_clockDate;
    document.getElementById('module_system_clockTime').innerHTML = module_system_clockTime;
};
module_system_clockInterval();
window.setInterval(module_system_clockInterval, 1000);

/**
 * System module - CPU usage computation.
 */
var module_system_cpuDiv = document.getElementById('module_system_cpu');
var module_system_cpuUsage = [];
var module_system_cpuInterval = function () {
    chrome.system.cpu.getInfo(function (cpu) {
        var div = document.createElement('div');
        var strong = document.createElement('strong');
        strong.appendChild(document.createTextNode(cpu.modelName));
        div.appendChild(strong);
        var ul = document.createElement('ul');
        for (var i = 0; i < cpu.numOfProcessors; i++) {
            var core = cpu.processors[i];
            var used = core.usage.kernel + core.usage.user;
            var total = core.usage.total;
            if (module_system_cpuUsage[i] != undefined) {
                var usedDiff = module_system_cpuUsage[i].used - used;
                var totalDiff = module_system_cpuUsage[i].total - total;
                var load = (usedDiff / totalDiff) * 100;
                var li = document.createElement('li');
                li.appendChild(document.createTextNode('Core ' + (i+1) + ': ' + (load.toFixed(0)) + '%'));
                ul.appendChild(li);
            } else {
                var li = document.createElement('li');
                li.appendChild(document.createTextNode('Core ' + (i+1) + ': Computing ...'));
                ul.appendChild(li);
            }
            module_system_cpuUsage[i] = {
                "used": used,
                "total": total
            };
        }
        div.appendChild(ul);
        module_system_cpuDiv.innerHTML = div.innerHTML;
    });
};
module_system_cpuInterval();
window.setInterval(module_system_cpuInterval, 2500);

/**
 * System module - Memory usage computation.
 */
var module_system_memoryDiv = document.getElementById('module_system_memoryDiv');
var module_system_memoryInterval = function () {
    chrome.system.memory.getInfo(function (memory) {
        console.log(memory.availableCapacity);
        var used = ((memory.capacity - memory.availableCapacity) / 1024 / 1024 / 1024).toFixed(2);
        var total = (memory.capacity / 1024 / 1024 / 1024).toFixed(2);
        var percentage = (used/total).toFixed(2) * 100;
        module_system_memoryDiv.innerHTML = used + ' GiB (' + percentage + '%) of ' + total + ' GiB';
    });
};
module_system_memoryInterval();
window.setInterval(module_system_memoryInterval, 2500);
