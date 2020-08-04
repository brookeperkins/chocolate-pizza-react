import React from 'react';

class Ingredients extends React.Component {
    render() {
        return (
            <section id="recipe-list">
                <form className="left-list">
                    <input id="Option" type="checkbox" autocomplete="off" />
                    <label className="check box" for="Option">
                        1 1/2 cups milk
                    </label>
                    <input id="Option1" type="checkbox" autocomplete="off" />
                    <label className="check box" for="Option1">
                        1/2 cup marscapone
                    </label>
                    <input id="Option2" type="checkbox" autocomplete="off" />
                    <label className="check box" for="Option2">
                        1/2 tsp pink salt
                    </label>
                    <input id="Option3" type="checkbox" autocomplete="off" />
                    <label className="check box" for="Option3">
                        1lb Black Mission figs
                    </label>
                    <input id="Option4" type="checkbox" autocomplete="off" />
                    <label className="check box" for="Option4">
                        1/2 cup brown sugar
                    </label>
                    <input id="Option5" type="checkbox" autocomplete="off" />
                    <label className="check box" for="Option5">
                        2-4 tbsp water
                    </label>
                </form>
                <form className="right-list">
                    <input id="Option" type="checkbox" autocomplete="off" />
                    <label className="check box" for="Option">
                        1 1/2 cups heavy cream
                    </label>
                    <input id="Option1" type="checkbox" autocomplete="off" />
                    <label className="check box" for="Option1">
                        1/2 cup something else
                    </label>
                    <input id="Option2" type="checkbox" autocomplete="off" />
                    <label className="check box" for="Option2">
                        1/2 tsp another thing
                    </label>
                    <input id="Option3" type="checkbox" autocomplete="off" />
                    <label className="check box" for="Option3">
                        1lb more stuff
                    </label>
                    <input id="Option4" type="checkbox" autocomplete="off" />
                    <label className="check box" for="Option4">
                        1/2 cup also this stuff
                    </label>
                    <input id="Option5" type="checkbox" autocomplete="off" />
                    <label className="check box" for="Option5">
                        2-4 tbsp love
                    </label>
                </form>
            </section>
        )
    }
}

export default Ingredients;