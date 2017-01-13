function getFirstSelector(selector)
{
  return document.querySelector(selector)
}

function nestedTarget()
{
const elements = document.getElementById('nested');
return elements.getElementsByClassName('target')[0];

}

function increaseRankBy(n)
{
const lis = document.getElementById('app').querySelectorAll('ul.ranked-list li')
  for (let i = 0, l = lis.length; i < l; i++) {
    lis[i].innerHTML = (parseInt(lis[i].innerHTML,10) + n).toString()
  }
}

function deepestChild()
{
  var lis = document.getElementById('grand-node').querySelectorAll('div')
  var l=lis.length;
  return lis[l-1];
  /*for (let i = 0, l = lis.length; i < l; i++) {
    lis[i].innerHTML = (i + 1).toString()
  }*/
}
