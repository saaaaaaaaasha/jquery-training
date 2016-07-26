'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Template = function () {
	function Template() {
		_classCallCheck(this, Template);

		this.defaultTemplate = '\n\t\t\t<div class="stickers__item" data-id="{{id}}">\n        <div class="stickers__item__close">\n          <a href="#" class="close">X</a>\n        </div>  \n        <div class="stickers__item__title">{{title}}</div>\n          <div class="stickers__item__description">{{description}}</div>\n          <div class="stickers__item__like">\n          <a href="#" class="like{{is_liked}}">{{likes}}</a>\n       </div>\n     </div>\n     ';
	}

	_createClass(Template, [{
		key: 'show',
		value: function show(data) {
			var _this = this;

			console.log(data);

			var view = data.map(function (d) {
				var template = _this.defaultTemplate;

				return template.replace('{{id}}', d.id).replace('{{title}}', d.title).replace('{{description}}', d.description).replace('{{is_liked}}', d.isLiked ? ' liked' : '').replace('{{likes}}', d.likes);
			});

			return view.join('');
		}
	}]);

	return Template;
}();

exports.default = Template;