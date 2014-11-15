/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


var o = {width:6, height:4, layout:"hex", fg:"#000", spacing:4};
var display = new ROT.Display(o);
//SHOW(display.getContainer());

display.draw(0, 0, "0,0,0",   "", "#fff");
display.draw(2, 0, "1,0,-1",  "", "#ccc");
display.draw(4, 0, "2,0,-2",  "", "#888");
display.draw(1, 1, "1,-1,0",  "", "#888");
display.draw(3, 1, "2,-1,-1", "", "#fff");
display.draw(5, 1, "3,-1,-2", "", "#ccc");
display.draw(0, 2, "1,-2,1",  "", "#fff");
display.draw(2, 2, "2,-2,0",  "", "#ccc");
display.draw(4, 2, "3,-2,-1", "", "#888");
display.draw(1, 3, "2,-3,1",  "", "#888");
display.draw(3, 3, "3,-3,0",  "", "#fff");
display.draw(5, 3, "4,-3,-1", "", "#ccc");

