<style>
.people-container {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    justify-content: center;
}

.person-box {
    border: 1px solid #ddd;
    border-radius: 8px;
    padding: 15px;
    width: 250px;
    text-align: center;
    box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.1);
}

.person-box .placeholder {
    background-color: #000;
    width: 100px;
    height: 100px;
    border-radius: 50%;
    margin: 0 auto;
}

.person-box h3 {
    margin: 10px 0 5px;
    font-size: 1.2em;
}

.person-box p {
    margin: 5px 0;
    color: #666;
}
</style>

<div class="people-container">
    <div class="person-box">
        <div class="placeholder"></div>
        <h3>Alice Johnson</h3>
        <p><strong>Role:</strong> Project Manager</p>
        <p>Alice has over 10 years of experience leading cross-functional teams to success.</p>
    </div>
    
    <div class="person-box">
        <div class="placeholder"></div>
        <h3>Bob Smith</h3>
        <p><strong>Role:</strong> Lead Developer</p>
        <p>Bob specializes in full-stack development and is an open-source enthusiast.</p>
    </div>
    
    <div class="person-box">
        <div class="placeholder"></div>
        <h3>Carol Lee</h3>
        <p><strong>Role:</strong> Data Scientist</p>
        <p>Carol is an expert in machine learning and data analytics. She loves uncovering insights from data.</p>
    </div>
</div>