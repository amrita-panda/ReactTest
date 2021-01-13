import React, { Component } from 'react';
import './GuessedWords.css';
import PropTypes from 'prop-types';

class GuessedWords extends Component {
    constructor(props) {
        super(props);
        this.state={

        }
    }
    
    render() {
        let contents;
        if(this.props.guessedWords.length===0){
            contents=(
                <span data-test='guessed-instruction'className='text-center'>Try to guess the secret word !</span>
            )
        }else{
            contents=(
                <div data-test='guessed-words'>
                    <h3>Guessed Words</h3>
                    <table className='table table-striped table-bordered table-hover table-sm'>
                        <thead className='thead-dark'>
                            <tr>
                                <th>Guess</th>
                                <th>Matching Letter</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.props.guessedWords.map((word,index)=>
                            <tr key={index} data-test='guessed-word'>
                                <td>{word.guessedWord}</td>
                                <td>{word.letterMatchCount}</td>
                            </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            )
        }
        return (
            <div data-test='component-guessed-word'>
                {contents}
            </div>
        );
    }
}
GuessedWords.propTypes={
    guessedWords:PropTypes.arrayOf(
        PropTypes.shape({
            guessedWord:PropTypes.string.isRequired,
            letterMatchCount:PropTypes.number.isRequired,

        })
    ).isRequired
}
export default GuessedWords;