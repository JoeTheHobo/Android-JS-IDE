let project = {
    variables: [],
}

let canvasSet = [
    {
        title: "getContext()",
        type: "code",
        kids: [
            {
                title: "2d",
                type: "code",
                kids: [
                    {
                        title: "{}",
                        type: "code",
                    },
                    {
                        title: "Home",
                        type: "option",
                        kids: "sets",
                    }
                ]
            },
            {
                title: "webgl",
                type: "code",
                kids: [
                    {
                        title: "{}",
                        type: "code",
                    },
                    {
                        title: "Home",
                        type: "option",
                        kids: "sets",
                    }
                ]
            },
            {
                title: "experimental-webgl",
                type: "code",
                kids: [
                    {
                        title: "{}",
                        type: "code",
                    },
                    {
                        title: "Home",
                        type: "option",
                        kids: "sets",
                    }
                ]
                
            },
            {
                title: "webgl2",
                type: "code",
                kids: [
                    {
                        title: "{}",
                        type: "code",
                    },
                    {
                        title: "Home",
                        type: "option",
                        kids: "sets",
                    }
                ]
                
            },
            {
                title: "webgpu",
                type: "code",
                kids: [
                    {
                        title: "{}",
                        type: "code",
                    },
                    {
                        title: "Home",
                        type: "option",
                        kids: "sets",
                    }
                ]
                
            },
            {
                title: "bitmaprenderer",
                type: "code",
                kids: [
                    {
                        title: "{}",
                        type: "code",
                    },
                    {
                        title: "Home",
                        type: "option",
                        kids: "sets",
                    }
                ]
                
            },
        ]
    },
    {
        title: "Gradients",
        type: "option",
        kids: [
            {
                title: "createLinearGradient()",
                type: "code",
            },
            {
                title: "createRadialGradient()",
                type: "code",
            },
            {
                title: "addColorStop()",
                type: "code",
            },
        ]
    },
    {
        title: "Text",
        type: "option",
        kids: [
            {
                title: ".font",
                type: "code",
                kids: "sets",
            },
            {
                title: ".fillText",
                type: "code",
                kids: "sets",
            },
            {
                title: ".textAlign",
                type: "code",
                kids: "sets",
            },
            {
                title: ".textBaseLine",
                type: "code",
                kids: "sets",
            },
        ]
    },
    {
        title: "Lines",
        type: "option",
        kids: [
            {
                title: ".beginPath()",
                type: "code",
                kids: "sets",
            },
            {
                title: ".moveTo()",
                type: "code",
                kids: "sets",
            },
            {
                title: ".lineTo()",
                type: "code",
                kids: "sets",
            },
            {
                title: ".arc()",
                type: "code",
                kids: "sets",
            },
        ]
    },
    {
        title: "Fill/Stroke",
        type: "option",
        kids: [
            {
                title: ".fillStyle",
                type: "code",
                kids: "sets",
            },
            {
                title: ".strokeStyle",
                type: "code",
                kids: "sets",
            },
            {
                title: ".fill()",
                type: "code",
                kids: "sets",
            },
            {
                title: ".stroke()",
                type: "code",
                kids: "sets",
            },
            {
                title: ".fillRect()",
                type: "code",
                kids: "sets",
            },
            {
                title: ".strokeRect()",
                type: "code",
                kids: "sets",
            },
        ]
    },
    {
        title: ".drawImage()",
        type: "code",
    }
]
let htmlAttSet = [
    {
        title: ".onclick",
        type: "code",
        kids: "sets",
    },
    {
        title: ".onmouseover",
        type: "code",
        kids: "sets",
    },
    {
        title: ".onmousedown",
        type: "code",
        kids: "sets",
    },
    {
        title: ".onmouseleave",
        type: "code",
        kids: "sets",
    },
]
let cssAttSet = [
    {
        title: ".style",
        type: "code",
        kids: "attSet",
    },
    {
        title: ".width",
        type: "code",
        kids: "sets",
    },
    {
        title: ".height",
        type: "code",
        kids: "sets",
    },
    {
        title: ".color",
        type: "code",
        kids: "sets",
    },
    {
        title: ".background",
        type: "code",
        kids: "sets",
    },
    {
        title: ".backgroundColor",
        type: "code",
        kids: "sets",
    },
    {
        title: ".innerWidth",
        type: "code",
        kids: "sets",
    },
    {
        title: ".innerHeight",
        type: "code",
        kids: "sets",
    },
]

let attSet = [
    {
        title: "HTML",
        type: "option",
        kids: "htmlAttSet",
    },
    {
        title: "CSS",
        type: "option",
        kids: "cssAttSet",
    },
    {
        title: ".addEventListener(...)",
        type: "code",
        kids: [
            {
                title: "click",
                type: "code",
                kids: "operationFunctionSet",
            },
            {
                title: "contextmenu",
                type: "code",
                kids: "operationFunctionSet",
            },
            {
                title: "dblclick",
                type: "code",
                kids: "operationFunctionSet",
            },
            {
                title: "Drag",
                type: "option",
                kids: [
                    {
                        title: "drag",
                        type: "code",
                        kids: "operationFunctionSet",
                    },
                    {
                        title: "dragend",
                        type: "code",
                        kids: "operationFunctionSet",
                    },
                    {
                        title: "dragenter",
                        type: "code",
                        kids: "operationFunctionSet",
                    },
                    {
                        title: "dragleave",
                        type: "code",
                        kids: "operationFunctionSet",
                    },
                    {
                        title: "dragover",
                        type: "code",
                        kids: "operationFunctionSet",
                    },
                    {
                        title: "dragstart",
                        type: "code",
                        kids: "operationFunctionSet",
                    },
                ],
            },
            {
                title: "focus",
                type: "code",
                kids: "operationFunctionSet",
            },
            {
                title: "input",
                type: "code",
                kids: "operationFunctionSet",
            },
            {
                title: "keydown",
                type: "code",
                kids: "operationFunctionSet",
            },
            {
                title: "keypress",
                type: "code",
                kids: "operationFunctionSet",
            },
            {
                title: "keyup",
                type: "code",
                kids: "operationFunctionSet",
            },
            {
                title: "Mouse",
                type: "option",
                kids: [
                    {
                        title: "mousedown",
                        type: "code",
                        kids: "operationFunctionSet",
                    },
                    {
                        title: "mouseenter",
                        type: "code",
                        kids: "operationFunctionSet",
                    },
                    {
                        title: "mouseleave",
                        type: "code",
                        kids: "operationFunctionSet",
                    },
                    {
                        title: "mousemove",
                        type: "code",
                        kids: "operationFunctionSet",
                    },
                    {
                        title: "mouseover",
                        type: "code",
                        kids: "operationFunctionSet",
                    },
                    {
                        title: "mouseout",
                        type: "code",
                        kids: "operationFunctionSet",
                    },
                    {
                        title: "mouseup",
                        type: "code",
                        kids: "operationFunctionSet",
                    },
                    {
                        title: "mousewheel",
                        type: "code",
                        kids: "operationFunctionSet",
                    },
                ],
            },
            {
                title: "resize",
                type: "code",
                kids: "operationFunctionSet",
            },
            {
                title: "Touch",
                type: "option",
                kids: [
                    {
                        title: "touchcancel",
                        type: "code",
                        kids: "operationFunctionSet",
                    },
                    {
                        title: "touchend",
                        type: "code",
                        kids: "operationFunctionSet",
                    },
                    {
                        title: "touchmove",
                        type: "code",
                        kids: "operationFunctionSet",
                    },
                    {
                        title: "touchstart",
                        type: "code",
                        kids: "operationFunctionSet",
                    },
                ],
            },
        ]
    }
    
]
let extraVarHome = [
    {
        title: ",",
        type: "code",
        pullUpKey: true,
        kids: "newVariableFam",
    },
    {
        title: "Home",
        type: "option",
        kids: "sets",
    }
]
let varTypes = [
    {
        title: "My Vars",
        display: "variables",
        type: "option",
        kids: "sets",
    },
    {
        title: "array",
        type: "option",
        iterate: true,
        kids: "varTypes",
    },
    {
        title: "number",
        type: "option",
        pullUpKey: "number",
        kids: "extraVarHome",
    },
    {
        title: "string",
        type: "option",
        pullUpKey: true,
        kids: "extraVarHome",

    },
    {
        title: "object",
        type: "option",
        iterate: "pullUpKey",
        kids: "varTypes",

    },
    {
        title: "bool",
        type: "option",
        kids: [
            {
                title: "true",
                type: "code",
                kids: "extraVarHome",
            },
            {
                title: "false",
                type: "code",
                kids: "extraVarHome",

            },
            {
                title: "undefined",
                type: "code",
                kids: "extraVarHome",

            },
            {
                title: "null",
                type: "code",
                kids: "extraVarHome",

            },
        ]
    },
] 
let operationFunctionSet = [

    {
        title: "My Functions",
        type: "option",
        findFunction: true,
        kids: [
            {
                title: "()",
                type: "code",
                kids: "sets",
            },
            {
                title: "{...}",
                type: "code",
                kids: "sets",
            },
        ],
    },
    {
        title: "function",
        type: "code",
        pullUpKey: true,
        kids: [
            {
                title: "()",
                type: "code",
                kids: [
                    {
                        title: "{...}",
                        type: "code",
                        kids: "sets",
                    }
                ],
            },
            {
                title: "(...)",
                type: "code",
                kids: [
                    {
                        title: "{...}",
                        type: "code",
                        kids: "sets",
                    }
                ],
            },
        ]
    }
]
let operationSet = [
    {
        title: "Operators",
        type: "option",
        kids: [
            {
                title: "+",
                type: "code",
                kids: "sets",
            },
            {
                title: "-",
                type: "code",
                kids: "sets",
            },
            {
                title: "/",
                type: "code",
                kids: "sets",
            },
            {
                title: "*",
                type: "code",
                kids: "sets",
            },
            {
                title: "=",
                type: "code",
                kids: "sets",
            },
            {
                title: "+=",
                type: "code",
                kids: "sets",
            },
            {
                title: "++",
                type: "code",
                kids: "sets",
            },
            {
                title: "--",
                type: "code",
                kids: "sets",
            },
        ]
    },
    {
        title: "Testing",
        type: "option",
        kids: [
            {
                title: "===",
                type: "code",
                kids: "sets",
            },
            {
                title: "==",
                type: "code",
                kids: "sets",
            },
            {
                title: "isNaN()",
                type: "code",
                kids: "sets",
            },
            {
                title: "typeof",
                type: "code",
                kids: "sets",
            },
            {
                title: "?",
                type: "code",
                kids: "sets",
            },
        ]
    },
    {
        title: "Misc",
        type: "option",
        kids: [
            {
                title: ".",
                type: "code",
                kids: "sets",
            },
            {
                title: "(",
                type: "code",
                kids: "sets",
            },
            {
                title: ")",
                type: "code",
                kids: "sets",
            },
            {
                title: "(...)",
                type: "code",
                kids: "sets",
            },
        ]
    },
    {
        title: "Functions",
        type: "option",
        kids: "operationFunctionSet",
    }
]
let newVariableFam = [
    {
        title: "=",
        type: "code",
        kids: "varTypes",
    },
    {
        title: ",",
        type: "code",
        pullUpKey: true,
        kids: "newVariableFam",
    },
    {
        title: ";",
        type: "code",
        kids: "sets",
    },
    {
        title: "Operations",
        type: "option",
        kids: "operationSet",
    },
    {
        title: "Home",
        type: "option",
        kids: "sets",
    },
]

let sets = [
    {
        title: "Variables",
        type: "option",
        kids: [
            {
                title: "let",
                type: "code",
                pullUpKey: true,
                kids: "newVariableFam",
            },
            {
                title: "var",
                type: "code",
                pullUpKey: true,
                kids: "newVariableFam",
            },
            {
                title: "const",
                type: "code",
                pullUpKey: true,
                kids: "newVariableFam",
            },
            {
                title: "My Vars",
                type: "option",
                kids: "sets",
            },
        ],
    },
    {
        title: "Statements",
        type: "option",
        kids: [
            {
                title: "if",
                type: "code",
            },
            {
                title: "else",
                type: "code",
                kids: [
                    {
                        title: "if",
                        type: "code",
                    },
                    {
                        title: "Home",
                        type: "option",
                        kids: "sets",
                    }
                ]
            },
            {
                title: "for",
                type: "code",
            },
            {
                title: "while",
                type: "code",
            },
            {
                title: "switch",
                type: "code",
            },
        ],
    },
    {
        title: "Comments",
        type: "option",
        kids: [
            {
                title: "//",
                type: "code",
                kids: "sets",
            },
            {
                title: "/*",
                type: "code",
                kids: "sets",
            },
            {
                title: "*/",
                type: "code",
                kids: "sets",
            }
        ]
    },
    {
        title: "Operations",
        type: "option",
        kids: "operationSet",
    } ,
    {
        title: "Canvas",
        type: "option",
        kids: "canvasSet",
    },
    {
        title: "Attributes",
        type: "option",
        kids: "attSet",
    },
    {
        title: "Selectors",
        type: "option",
        kids: "selectSet",
    }
];
let selectSet = [
    {
        title: "document",
        type: "code",
        kids: "sets",
    },
    {
        title: "window",
        type: "code",
        kids: "sets",
    },
    {
        title: ".getElementById()",
        type: "code",
        kids: "sets",
    },
    {
        title: ".getElementsByClassName()",
        type: "code",
        kids: "sets",
    },
    {
        title: ".querySelector()",
        type: "code",
        kids: "sets",
    },
    {
        title: ".querySelectorAll()",
        type: "code",
        kids: "sets",
    },
    {
        title: ".getElementsByTagName()",
        type: "code",
        kids: "sets",
    },
]
//Set Up Canvas
let bubbles = $('bubbles');
let ctx = bubbles.getContext('2d');
let currentSet = sets;

bubbles.width = window.innerWidth;
bubbles.height = window.innerHeight * 0.4;

bubbles.css({
    width: window.innerWidth + 'px',
    height: (window.innerHeight * 0.4) + 'px',
})

function startRender() {

    setInterval(function() {
        //Clear Canvas
        ctx.clearRect(0,0,bubbles.width,bubbles.height)

        //Render Bubbles
        renderBubbles();

        //Render User
        renderUser();

        //Render Buttons
        renderButtons();
    })
}
let sideMenuOps = [
    {
        title: "H",
        kids: "sets",
    },
    {
        title: "#",
        pullUpKey: "number",
        kids: "sets",
    },
    {
        title: "A",
        pullUpKey: true,
        kids: "sets",
    },
    {
        title: ";",
        newLine: ";",
        kids: "sets",
    },
]
function renderButtons() {
    ctx.fillStyle = 'lime';
    ctx.font = "25px Arial";
    ctx.textAlign = "center";
    for (let i = 0; i < sideMenuOps.length; i++) {
        ctx.fillText(sideMenuOps[i].title,bubbles.width - 25,bubbles.height-(30+(35*i)));
    }
}

let user = {
    down: false,
    pos: {
        x: false,
        y: false,
    }
}
bubbles.addEventListener("touchstart",function(e) {
    user.pos.x = e.touches[0].pageX;
    user.pos.y = e.touches[0].pageY - (window.innerHeight * 0.6);
    const circleX = bubbles.width / 2;
    const circleY = bubbles.height / 2;
    if (Math.sqrt((user.pos.x-circleX)*(user.pos.x-circleX) + (user.pos.y-circleY)*(user.pos.y-circleY)) < 30) user.down = true;

})
bubbles.addEventListener("touchmove",function(e) {
    user.pos.x = e.touches[0].pageX;
    user.pos.y = e.touches[0].pageY - (window.innerHeight * 0.6);
})
bubbles.addEventListener("touchend",function(e) {
    //Check If Touching Menu Options
    if (!user.down) {
        for (let i = 0; i < sideMenuOps.length; i++) {
            if (Math.sqrt((user.pos.x-(bubbles.width - 25))*(user.pos.x-(bubbles.width - 25)) + (user.pos.y-(bubbles.height-(30+(35*i))))*(user.pos.y-(bubbles.height-(30+(35*i))))) < 25) {
                if (sideMenuOps[i].title == 'H') {
                    currentSet = sets;
                }
                if (sideMenuOps[i].title == ';') {
                    currentSet = sets;
                }
            }
        }
    }
    //Check If User Landed On A Circle
    if (user.down) {
        user.down = false;
        const startAngle = Math.PI * -0.5;
        let maxSize = 40;
        let boxSize = Math.min(bubbles.width,bubbles.height) / currentSet.length;
        if (boxSize > maxSize) boxSize = maxSize;
        const circleX = bubbles.width / 2;
        const circleY = bubbles.height / 2;
        let radius = Math.min(bubbles.height,bubbles.width) /2.5 - boxSize /2 - 4;
        finding: for (let i = 0; i < currentSet.length; i++) {
            
            var ang = i * ((Math.PI * 2) / currentSet.length) + startAngle;
            var x = Math.cos(ang) * radius + circleX;
            var y = Math.sin(ang) * radius + circleY;
            if (Math.sqrt((user.pos.x-x)*(user.pos.x-x) + (user.pos.y-y)*(user.pos.y-y)) < boxSize) {
                if (currentSet[i].kids) {
                    if (typeof currentSet[i].kids === 'string' || currentSet[i].kids instanceof String) {
                        currentSet = eval(currentSet[i].kids);
                    } else {
                        currentSet = currentSet[i].kids;
                    }
                    break finding;
                }
            }
        }
    }

    user.down = false;
})

function renderUser() {
    ctx.fillStyle = 'blue';
    
    const circleX = bubbles.width / 2;
    const circleY = bubbles.height / 2;

    if (user.down) {
        ctx.fillCircle(user.pos.x,user.pos.y,30);
    } else {
        ctx.fillCircle(circleX,circleY,30);
    }
}
function renderBubbles(set = currentSet) {
    const startAngle = Math.PI * -0.5;
    let maxSize = 40;
    let boxSize = Math.min(bubbles.width,bubbles.height) / set.length;
    if (boxSize > maxSize) boxSize = maxSize;
    const circleX = bubbles.width / 2;
    const circleY = bubbles.height / 2;
    let radius = Math.min(bubbles.height,bubbles.width) /2.5 - boxSize /2 - 4;
    for (let i = 0; i < set.length; i++) {
        
        var ang = i * ((Math.PI * 2) / set.length) + startAngle;
        var x = Math.cos(ang) * radius + circleX;
        var y = Math.sin(ang) * radius + circleY;

        if (set[i].type == 'code') ctx.fillStyle = 'lime';
        if (set[i].type == 'option') ctx.fillStyle = 'lightblue';

        ctx.fillCircle(x,y,boxSize)
        ctx.fillStyle = 'black';
        ctx.font = (boxSize/2.6) + 'px Arial';
        ctx.textAlign = "left";
        let width = ctx.measureText(set[i].title).width;
        ctx.textBaseline = 'middle';
        ctx.fillText(set[i].title, x - (width/2), y);
    }
}

startRender();

CanvasRenderingContext2D.prototype.fillCircle = function(x,y,r) {
    this.beginPath();
    this.arc(x, y, r, 0, 2 * Math.PI);
    this.fill();
}