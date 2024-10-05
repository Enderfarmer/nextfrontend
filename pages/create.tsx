import "./styles/menu-tabs.css";
import "./globals.css";

const Create = ({}) => {
    return (
        <main>
            <div className="h-full w-full">
                <div>
                    <span>
                        <a href="#mon">Monday</a>
                    </span>
                    <span>
                        <a href="#tue">Tuesday</a>
                    </span>
                    <span>
                        <a href="#wed">Wednesday</a>
                    </span>
                    <span>
                        <a href="#thu">Thursday</a>
                    </span>
                    <span>
                        <a href="#fri">Friday</a>
                    </span>
                    <span>
                        <a href="#sat">Saturday</a>
                    </span>
                    <span>
                        <a href="#sun">Sunday</a>
                    </span>
                </div>
                <div className="w-full h-60 bg-amber-600 tabs">
                    <div id="mon">
                        <div className="input-field">
                            <input type="text" className="breakfast" />

                            <label>Frühstück</label>
                        </div>
                        <div className="form-group input-field">
                            <input type="text" className="lunch" />
                            <label>Mittagessen</label>
                        </div>
                        <input type="text" className="dessert" />
                        <input type="text" className="dinner" />
                    </div>
                    <div id="tue">
                        <input type="text" className="breakfast" />
                        <input type="text" className="lunch" />
                        <input type="text" className="dessert" />
                        <input type="text" className="dinner" />
                    </div>
                    <div id="wed">
                        <input type="text" className="breakfast" />
                        <input type="text" className="lunch" />
                        <input type="text" className="dessert" />
                        <input type="text" className="dinner" />
                    </div>
                    <div id="thu">
                        <input type="text" className="breakfast" />
                        <input type="text" className="lunch" />
                        <input type="text" className="dessert" />
                        <input type="text" className="dinner" />
                    </div>
                    <div id="fri">
                        <input type="text" className="breakfast" />
                        <input type="text" className="lunch" />
                        <input type="text" className="dessert" />
                        <input type="text" className="dinner" />
                    </div>
                    <div id="sat">
                        <input type="text" className="breakfast" />
                        <input type="text" className="lunch" />
                        <input type="text" className="dessert" />
                        <input type="text" className="dinner" />
                    </div>
                    <div id="sun">
                        <input type="text" className="breakfast" />
                        <input type="text" className="lunch" />
                        <input type="text" className="dessert" />
                        <input type="text" className="dinner" />
                    </div>
                </div>
            </div>
        </main>
    );
};

export default Create;
