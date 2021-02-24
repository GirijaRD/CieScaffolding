import {TextField,InputAdornment} from '@material-ui/core';
import {Autocomplete} from '@material-ui/lab';
import SearchIcon from '@material-ui/icons/Search';
import useStyles from './styles';
import React, { ReactElement } from 'react';
import { connect } from 'react-redux';
/**
 * Search box takes input from user and shows options for input query
 * options can be either async or directly given
 * Take options from props
 * on select of an option raise events such that they navigate to selected filter and let 
 * wait for user inputs
 */

interface SearchBoxProps{
    options:Array<any>,
}

function renderInput(styles:any, params:any) {
    return (
      <TextField
        {...params}
        variant="standard"
        classes={{ root: styles.TextField ,endAdornment:styles.endAdornment}}
        InputProps={{
          ...params.InputProps,
          placeholder: "Search",
          disableUnderline: true,
          startAdornment: (
            <InputAdornment
            position={"start"}
            >
                <SearchIcon className={styles.SearchIcon} />
            </InputAdornment>
          )
        }}
      />
    );
  }
  function SearchBox(props: SearchBoxProps):ReactElement {
    const styles = useStyles();
    return <Autocomplete renderInput={renderInput.bind(null,styles)} options={props.options} classes={{root:styles.Autocomplete}}
        forcePopupIcon={false}
    />;
  }

function mapStateToProps({options}:any):SearchBoxProps{
    return {
        options:options||[]
    };
}
export default connect(mapStateToProps)(SearchBox);