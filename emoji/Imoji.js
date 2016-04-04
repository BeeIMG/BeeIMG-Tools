var ranges = [
  '\ud83c[\udf00-\udfff]', // U+1F300 to U+1F3FF
  '\ud83d[\udc00-\ude4f]', // U+1F400 to U+1F64F
  '\ud83d[\ude80-\udeff]', // U+1F680 to U+1F6FF
];
var el = document.body;
el.innerHTML = el.innerHTML.replace(
  new RegExp(ranges.join('|'), 'g'),'<span class="emoji" alt="$&" style="background-image: url(\'//emoji.beeimg.com/$&\');"></span>')