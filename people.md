<style>
    @media (max-width: 768px) {
        .person {
            width: 100%;
        }
    }
    @media (min-width: 769px) {
        .person {
            width: calc(33.333%-6px);
        }
    }    .container .people {
        display: flex;
        flex-wrap: wrap;
    }
    .person {
        border: #000 solid 1px;
    }
</style>

<div class="container people">
    <div class="person">
        <div class="placeholder" style="background-color: #000; width: 100px; height: 100px;"></div>
        <h3>Ethan Harvey</h3>
        <p>Position</p>
    </div>
    <div class="person">
        <div class="placeholder" style="background-color: #000; width: 100px; height: 100px;"></div>
        <h3>Ethan Harvey</h3>
        <p>Position</p>
    </div>
    <div class="person">
        <div class="placeholder" style="background-color: #000; width: 100px; height: 100px;"></div>
        <h3>Ethan Harvey</h3>
        <p>Position</p>
    </div>
</div>