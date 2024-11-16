<style>
    @media (max-width: 768px) {
        .person {
            flex: 1 1 100%;
        }
    }
    @media (min-width: 769px) {
        .person {
            flex: 1 1 calc(33.333% - 46px);
        }
    }    .container .people {
        display: flex;
        flex-wrap: wrap;
    }
    .person {
        border: #000 solid 1px;
        margin-right: 20px;
    }
</style>

<div class="container people">
    <div class="person">
        <div style="background-color: #000; width: 100%; aspect-ratio: 3/2;"></div>
        <h3>Ethan Harvey</h3>
        <p>Position</p>
    </div>
    <div class="person">
        <div style="background-color: #000; width: 100%; aspect-ratio: 3/2;"></div>
        <h3>Ethan Harvey</h3>
        <p>Position</p>
    </div>
    <div class="person">
        <div style="background-color: #000; width: 100%; aspect-ratio: 3/2;"></div>
        <h3>Ethan Harvey</h3>
        <p>Position</p>
    </div>
</div>