<style>
    @media (max-width: 768px) {
        .person {
            flex: 1 1 100%;
        }
    }
    @media (min-width: 769px) {
        .person {
            flex: 1 1 calc(33.333% - 6px);
        }
    }    .container .people {
        display: flex;
        flex-wrap: wrap;
    }
    .person {
        border: #000 solid 1px;
    }
</style>