function measure(str){
	var match = str.match(/^\s*(\d*\.?\d*)(\S*)\s*$/);
	var _val = match && parseFloat(match[1]) || 0;
	var _unit = match && match[2] || "";
	var f = function measure_instance(){
		if(arguments.length){
			_val = arguments[0];
		}
		return _val + _unit;
	}
	f.unit = function measure_unit(){
		if(arguments.length){
			_unit = arguments[0];
			return f;
		}
		return _unit;
	}
	f.value = function measure_value(){
		if(arguments.length){
			_val = arguments[0];
			return f;
		}
		return _val;
	}
	f.add = function measure_add(v){
		_val += v;
		return f;
	}
	f.mult = function measure_mult(v){
		_val *= v;
		return f;
	}
	return f;
}

var module = module || {};
module.exports = measure;
