const size = 3
const container = document.getElementById('container')
    for (let i = 0; i < 9; i++) {
        const cell = document.createElement('div')
        cell.classList.add('cell')
        container.appendChild(cell)
    }
window.addEventListener("DOMContentLoaded",()=>{
const cells=Array.from(document.querySelectorAll('.cell'))
const results = document.querySelector('.results');
let board = ['','','','','','','','','']
let player = 'X'
let isActive = true
const x_win = "X wins!"
const o_win = "O wins!"
const tie = "Tie!"
const winning_combinations = [[0, 1, 2],[3, 4, 5],[6, 7, 8],[0, 3, 6],[1, 4, 7],[2, 5, 8],[0, 4, 8],[2, 4, 6]]
function check_winner() {
    for (let i = 0; i < winning_combinations.length; i++) {
        const winning_combination = winning_combinations[i];
        const a = board[winning_combination[0]]
        const b = board[winning_combination[1]]
        const c = board[winning_combination[2]]
        if (a===''||b===''||c==='') continue
        if (a === b && b === c){
            result(player==='X'?x_win:o_win)
            isActive = false
            return
        }
    }
    if (!board.includes('')) result(tie)
}
const result = (state) => {
    switch (state) {
        case x_win:
            results.innerHTML = 'X wins!'
            break
        case o_win:
            results.innerHTML = 'O wins!'
            break
        case tie:
            results.innerHTML = 'Tie!'
            break
    }
    results.classList.remove('hide')
}
const valid_action = (cell) => {
    if (cell.innerHTML !== '') return false
    return true
}
const update = (index) => {board[index] = player}
const action = (cell, index) => {
    if (valid_action(cell) && isActive) {
        cell.innerHTML = player
        cell.classList.add(player)
        update(index)
        check_winner()
        player = player === 'X' ? 'O' : 'X'
    }
}
cells.forEach((cell, index) => {cell.addEventListener('click', () => action(cell,index))})
})