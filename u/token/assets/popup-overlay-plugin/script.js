(function() {
    document.addEventListener("DOMContentLoaded", function() {
        document.querySelector("html").classList.contains("is-builder") || (document.querySelectorAll(".mbr-popup").forEach(function(a) {
            if ("undefined" !== typeof bootstrap)
                if ("undefined" !== typeof bootstrap.Modal.getInstance) a.addEventListener("show.bs.modal", function(a) {
                    var b = this;
                    setTimeout(function() {
                        document.querySelectorAll(".modal-backdrop").forEach(function(c) {
                            c.style.backgroundColor = b.getAttribute("data-overlay-color");
                            c.style.opacity =
                                b.getAttribute("data-overlay-opacity")
                        })
                    }, 0)
                });
                else {
                    if ("undefined" !== typeof jQuery) $(a).on("show.bs.modal", function(a) {
                        var b = this;
                        setTimeout(function() {
                            document.querySelectorAll(".modal-backdrop").forEach(function(c) {
                                c.style.backgroundColor = b.getAttribute("data-overlay-color");
                                c.style.opacity = b.getAttribute("data-overlay-opacity")
                            })
                        }, 0)
                    })
                }
            else if ("undefined" !== typeof jQuery) $(a).on("show.bs.modal", function(a) {
                var b = this;
                setTimeout(function() {
                    document.querySelectorAll(".modal-backdrop").forEach(function(a) {
                        a.style.backgroundColor =
                            b.getAttribute("data-overlay-color");
                        a.style.opacity = b.getAttribute("data-overlay-opacity")
                    })
                }, 0)
            })
        }), document.querySelectorAll(".mbr-popup").forEach(function(a) {
            a.addEventListener("hide.bs.modal", function(a) {
                document.querySelectorAll(".modal-backdrop").forEach(function(a) {
                    a.style.opacity = 0
                })
            })
        }))
    })
})();