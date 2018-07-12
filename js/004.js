window.jQuery = function(nodeOrSelector) {
	let nodes = {}
	// 传入选择器
	if (typeof nodeOrSelector === 'string') {
		var temp = document.querySelectorAll(nodeOrSelector)
		for (let i = 0; i < temp.length; i++) {
			nodes[i] = temp[i]
		}
		nodes['length'] = temp.length
	} 
	// 传入节点
	else if (nodeOrSelector instanceof Node) {
		nodes = {
			0: nodeOrSelector,
			length: 1
		}
	} 
	// 传入DOM集合
	else {
		for (let i = 0; i < nodeOrSelector.length; i++) {
			nodes[i] = nodeOrSelector[i]
		}
		nodes['length'] = nodeOrSelector.length
	}

	nodes.addClass = function(classes) {
		for (let key in classes) {
			for (let i = 0; i < nodes.length; i++) {
				let methodName = classes[key] ? 'add' : 'remove'
				nodes[i].classList[methodName](key)
			}

		}

	}

	nodes.Text = function(text) {
		var texts = []
		if (text === undefined) {
			for (let i = 0; i < nodes.length; i++) {
				texts[i] = nodes[i].textContent
			}
			return texts
		}
		for (let i = 0; i < nodes.length; i++) {
			nodes[i].textContent = text;
		}
	}


	return nodes
}

window.$ = window.jQuery

var boxes = document.getElementsByTagName('div')
console.log($(box).Text.call($(box)))
console.log($('div').Text.call($('div')))

btn.onclick = function() {
	$('div').addClass.call($('div'), {
		red: true,
		box: true,
		green: false
	})
	$(boxes).Text.call($('div'), 'hi')
}