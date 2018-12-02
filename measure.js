function measure(str){
	var match = str.match(/^\s*(\d*\.?\d+)(\S*)\s*$/);
	var _val = match && parseFloat(match[1]) || 0;
	var _unit = match && match[2] || "";
	var f = function (){
		if(arguments.length){
			_val = arguments[0];
		}
		return _val + _unit;
	}
	f.unit = function(){
		if(arguments.length){
			_unit = arguments[0];
			return f;
		}
		return _unit;
	}
	f.value = function(){
		if(arguments.length){
			_val = arguments[0];
			return f;
		}
		return _val;
	}
	return f;	
}
