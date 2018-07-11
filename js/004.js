window.jQuery = function(nodeOrSelector){
	let nodes = {}
	if (typeof nodeOrSelector === 'string') {
		var temp = document.querySelectorAll(nodeOrSelector)
		for(let i = 0; i < temp.length; i++){
			nodes[i] = temp[i]
			nodes['length'] = temp.length
		}
	}
	else if(nodeOrSelector instanceof Node){
		nodes={
			0:nodeOrSelector,
			length : 1
		}
	}

	nodes.addClass = function(classes){
		classes.forEach((value) => {
			for(let i = 0; i < nodes.length; i++){
				nodes[i].classList.add(classes)	
			}
		})
		
	}
	nodes.setText = function(text){
		for(let i = 0;i < nodes.length; i++){
			nodes[i].textContent = text;
		}
	}


	return nodes
}

window.$ = window.jQuery

$('div').addClass.call($('div'),['red'])
$('div').setText.call($('div'),'hi')