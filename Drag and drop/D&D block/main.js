const dragDrop=()=>{
    const dragEl = document.querySelector('.drag_el');
    const dropZone = document.querySelector('.drop_zone');
    let coordX;
    let coordY;

    dragEl.addEventListener('dragstart', (e)=>{
        e.dataTransfer.setData('text/html', 'dragstart');
        coordX = e.offsetX;
        coordY = e.offsetY;
    });

    dropZone.addEventListener('dragover', (e) => {
        e.preventDefault();
    });

    dropZone.addEventListener('drop', (e) => {
        dragEl.style.position = 'absolute';
        dragEl.style.top = (e.pageY - coordY) + 'px';
        dragEl.style.left = (e.pageX - coordX) + 'px';
    });
}

dragDrop();