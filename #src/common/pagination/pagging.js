// {
//     let pagination = document.querySelector('.pagging');
//     if(pagination) {
//         let remeberItem;
//         pagination.addEventListener('mouseenter', () => {
//             let items = pagination.querySelectorAll('.page-link');
//             items.forEach(item => {
//                 if(item.classList.contains('active')) {
//                     remeberItem = item;
//                     item.classList.remove('active');
//                 }
//             })
//         })

//         pagination.addEventListener('mouseleave', () => {
//             if(remeberItem) {
//                 remeberItem.classList.add('active');
//             }
//         })
//     }
// }