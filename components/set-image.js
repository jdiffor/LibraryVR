
function changeImage(direction) {

    if(current[direction] != null) {
        // Fade out image.
        console.log(direction);

        // Wait for fade to complete.
        setTimeout(function () {
            // Set image.
            document.querySelector('#image-current').setAttribute('material', 'src', current[direction].img);

            var previous = current;
            current = current[direction];

            if(current.right == null)document.querySelector('#goRightLink').setAttribute("visible", false);
            else document.getElementById('goRightLink').setAttribute("visible", true);
            if(current.left == null) document.getElementById('goLeftLink').setAttribute("visible", false);
            else document.getElementById('goLeftLink').setAttribute("visible", true);
            if(current.forward == null) document.getElementById('goForwardLink').setAttribute("visible", false);
            else document.getElementById('goForwardLink').setAttribute("visible", true);
            if(current.backward == null) document.getElementById('goBackwardLink').setAttribute("visible", false);
            else document.getElementById('goBackwardLink').setAttribute("visible", true);

            // Once image has been swapped, fade back in
            document.querySelector('#image-current').emit('endFade');
        }, 800);

        // Fade image out
        document.querySelector('#image-current').emit('startFade');
    }
}
