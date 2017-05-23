'use strict';
(function() {

    var dragSrcEl = null;
    var cols = document.querySelectorAll('#team .col-2');

    function handleDragStart(e) {
        // Target (this) element is the source node.
        this.style.opacity = '0.4';
        dragSrcEl = this;
        e.dataTransfer.effectAllowed = 'move';
        e.dataTransfer.setData('text/html', this.innerHTML);
    }

    function handleDragEnd(e) {
        // this|e.target is the source node.
        this.style.opacity = '1';
        [].forEach.call(cols, function(col) {
            col.classList.remove('over');
        });
    }

    function handleDragEnter(e) {
        // this|e.target is the current hover target.
        this.classList.add('over');
    }

    function handleDragLeave(e) {
        // this|e.target is previous target element.
        this.classList.remove('over');
    }

    function handleDrop(e) {
        // this/e.target is current target element.
        if (e.stopPropagation) {
            e.stopPropagation(); // Stops some browsers from redirecting.
        }
        // Don't do anything if dropping the same column we're dragging.
        if (dragSrcEl != this) {
            // Set the source column's HTML to the HTML of the column we dropped on.
            dragSrcEl.innerHTML = this.innerHTML;
            this.innerHTML = e.dataTransfer.getData('text/html');
        }
        return false;
    }

    function handleDragOver(e) {
        if (e.preventDefault) {
            e.preventDefault(); // Necessary. Allows us to drop.
        }
        e.dataTransfer.dropEffect = 'move';
        return false;
    }


    [].forEach.call(cols, function(col) {
        col.addEventListener('dragstart', handleDragStart);
        col.addEventListener('dragenter', handleDragEnter);
        col.addEventListener('dragover', handleDragOver);
        col.addEventListener('dragleave', handleDragLeave);
        col.addEventListener('drop', handleDrop);
        col.addEventListener('dragend', handleDragEnd);
    });

})()
