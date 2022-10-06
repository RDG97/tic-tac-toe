function createEl(parentEl, tag, text, className, idName,) {
    // creates element based on tag input
    // Example 'div' creates a div element
    let element = document.createElement(tag)
    // Takes value of text and places it in innerText of
    // the element being created
    element.innerText = text

    // If className exists
    if (className) {
        // Set class attribute of element = className
        element.setAttribute('class', className)
    };
    // If idName exists
    if (idName) {
        // Set id attribute of element = idName
        element.setAttribute('id', idName)
    }
    // parentEl = parent element
    // places the element being created inside parentEl
    parentEl.appendChild(element)
}

//exaple el create
createEl(mainContainer, 'div', '', 'col-12-sm col-4-lg', 'headContainer')
//thanks Josh D!

function buildBoard2() {
    createEl(app, 'div', '', 'container border', 'board')
    createEl(board, 'div', '', 'd-flex flex-row bg-primary flex-fill text-center p-1 w-auto h-auto', 'row1')
    createEl(board, 'div', '', 'd-flex flex-row bg-primary flex-fill text-center p-1 w-auto h-auto', 'row2')
    createEl(board, 'div', '', 'd-flex flex-row bg-primary flex-fill text-center p-1 w-auto h-auto', 'row3')
    createEl(row1, 'div', '', 'p-2 bg-danger flex-fill p-4 border border-dark boxxy', 'box0' )
    createEl(row1, 'div', '', 'p-2 bg-danger flex-fill p-4 border border-dark boxxy', 'box1' )
    createEl(row1, 'div', '', 'p-2 bg-danger flex-fill p-4 border border-dark boxxy', 'box2' )
    createEl(row2, 'div', '', 'p-2 bg-danger flex-fill p-4 border border-dark boxxy', 'box3' )
    createEl(row2, 'div', '', 'p-2 bg-danger flex-fill p-4 border border-dark boxxy', 'box4' )
    createEl(row2, 'div', '', 'p-2 bg-danger flex-fill p-4 border border-dark boxxy', 'box5' )
    createEl(row3, 'div', '', 'p-2 bg-danger flex-fill p-4 border border-dark boxxy', 'box6' )
    createEl(row3, 'div', '', 'p-2 bg-danger flex-fill p-4 border border-dark boxxy', 'box7' )
    createEl(row3, 'div', '', 'p-2 bg-danger flex-fill p-4 border border-dark boxxy', 'box8' )
    createEl(app, 'div', '', '', 'turnTrack')
}