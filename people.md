<style>
    @media (max-width: 768px) {
        .person {
            flex: 1 1 100%;
        }
    }
    @media (min-width: 769px) {
        .person {
            flex: 1 1 calc(33.333% - 20px);
        }
    }
    .container .people {
        display: flex;
        flex-wrap: wrap;
        gap: 20px;
    }
    .person {
        border: 1px solid #ddd;
        border-radius: 8px;
        padding: 15px;
        width: 250px;
        text-align: center;
        box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.1);
    }
</style>

<div class="container people">
    <div class="person">
        <div class="placeholder" style="background-color: #000; width: 100px; height: 100px;"></div>
        <h3>Ethan Harvey</h3>
        <p>Position</p>
    </div>
</div>