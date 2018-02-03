import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Input, { InputLabel } from 'material-ui/Input';
import { MenuItem } from 'material-ui/Menu';
import { FormControl, FormHelperText } from 'material-ui/Form';
import Select from 'material-ui/Select';

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  formControl: {
    margin: theme.spacing.unit,
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing.unit * 2,
  },
});

class SimpleSelect extends React.Component {
  state = {
    langFrom: '',
    langTo: ''
  };

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    const { classes } = this.props;

    return (
      <form className={classes.container} autoComplete="off">
        <FormControl className={classes.formControl}>
          <InputLabel htmlFor="langTo">Translate to</InputLabel>
          <Select
            value={this.state.langTo}
            onChange={this.handleChange}
            inputProps={{
              name: 'langTo',
              id: 'langTo',
            }}
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value={"af"}>Afrikaans</MenuItem>
            <MenuItem value={"ar"}>Arabic</MenuItem>
            <MenuItem value={"bn"}>Bangla</MenuItem>
            <MenuItem value={"bs"}>Bosnian</MenuItem>
            <MenuItem value={"bg"}>Bulgarian</MenuItem>
            <MenuItem value={"yue"}>Cantonese (Traditional)</MenuItem>
            <MenuItem value={"ca"}>Catalan</MenuItem>
            <MenuItem value={"zh-Hans"}>Chinese Simplified</MenuItem>
            <MenuItem value={"zh-Hant"}>Chinese Traditional</MenuItem>
            <MenuItem value={"hr"}>Croatian</MenuItem>
            <MenuItem value={"cs"}>Czech</MenuItem>
            <MenuItem value={"nl"}>Dutch</MenuItem>
            <MenuItem value={"en"}>English</MenuItem>
            <MenuItem value={"et"}>Estonian</MenuItem>
            <MenuItem value={"fj"}>Fijian</MenuItem>
            <MenuItem value={"fil"}>Filipino</MenuItem>
            <MenuItem value={"fi"}>Finnish</MenuItem>
            <MenuItem value={"fr"}>French</MenuItem>
            <MenuItem value={"de"}>German</MenuItem>
            <MenuItem value={"el"}>Greek</MenuItem>
            <MenuItem value={"ht"}>Haitian Creole</MenuItem>
            <MenuItem value={"he"}>Hebrew</MenuItem>
            <MenuItem value={"hi"}>Hindi</MenuItem>
            <MenuItem value={"mww"}>Hmong Daw</MenuItem>
            <MenuItem value={"hu"}>Hungarian</MenuItem>
            <MenuItem value={"id"}>Indonesian</MenuItem>
            <MenuItem value={"it"}>Italian</MenuItem>
            <MenuItem value={"ja"}>Japanese</MenuItem>
            <MenuItem value={"sw"}>Kiswahili</MenuItem>
            <MenuItem value={"tlh"}>Klingon</MenuItem>
            <MenuItem value={"ko"}>Korean</MenuItem>
            <MenuItem value={"lv"}>Latvian</MenuItem>
            <MenuItem value={"lt"}>Lithuanian</MenuItem>
            <MenuItem value={"mg"}>Malagasy</MenuItem>
            <MenuItem value={"ms"}>Malay</MenuItem>
            <MenuItem value={"mt"}>Maltese</MenuItem>
            <MenuItem value={"nb"}>Norwegian</MenuItem>
            <MenuItem value={"pl"}>Polish</MenuItem>
            <MenuItem value={"pt"}>Portuguese</MenuItem>
            <MenuItem value={"otq"}>Querétaro Otomi</MenuItem>
            <MenuItem value={"ro"}>Romanian</MenuItem>
            <MenuItem value={"ru"}>Russian</MenuItem>
            <MenuItem value={"sm"}>Samoan</MenuItem>
            <MenuItem value={"sr-Cyrl"}>Serbian (Cyrillic)</MenuItem>
            <MenuItem value={"sr-Latn"}>Serbian (Latin)</MenuItem>
            <MenuItem value={"sk"}>Slovak</MenuItem>
            <MenuItem value={"sl"}>Slovenian</MenuItem>
            <MenuItem value={"es"}>Spanish</MenuItem>
            <MenuItem value={"sv"}>Swedish</MenuItem>
            <MenuItem value={"ty"}>Tahitian</MenuItem>
            <MenuItem value={"ta"}>Tamil</MenuItem>
            <MenuItem value={"th"}>Thai</MenuItem>
            <MenuItem value={"to"}>Tongan</MenuItem>
            <MenuItem value={"tr"}>Turkish</MenuItem>
            <MenuItem value={"uk"}>Ukrainian</MenuItem>
            <MenuItem value={"ur"}>Urdu</MenuItem>
            <MenuItem value={"vi"}>Vietnamese</MenuItem>
            <MenuItem value={"cy"}>Welsh</MenuItem>
            <MenuItem value={"yua"}>Yucatec Maya</MenuItem>
          </Select>
        </FormControl>

        <FormControl className={classes.formControl}>
          <InputLabel htmlFor="langFrom">Translate from</InputLabel>
          <Select
            value={this.state.langFrom}
            onChange={this.handleChange}
            inputProps={{
              name: 'langFrom',
              id: 'langFrom',
            }}
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value={"af"}>Afrikaans</MenuItem>
            <MenuItem value={"ar"}>Arabic</MenuItem>
            <MenuItem value={"bn"}>Bangla</MenuItem>
            <MenuItem value={"bs"}>Bosnian</MenuItem>
            <MenuItem value={"bg"}>Bulgarian</MenuItem>
            <MenuItem value={"yue"}>Cantonese (Traditional)</MenuItem>
            <MenuItem value={"ca"}>Catalan</MenuItem>
            <MenuItem value={"zh-Hans"}>Chinese Simplified</MenuItem>
            <MenuItem value={"zh-Hant"}>Chinese Traditional</MenuItem>
            <MenuItem value={"hr"}>Croatian</MenuItem>
            <MenuItem value={"cs"}>Czech</MenuItem>
            <MenuItem value={"nl"}>Dutch</MenuItem>
            <MenuItem value={"en"}>English</MenuItem>
            <MenuItem value={"et"}>Estonian</MenuItem>
            <MenuItem value={"fj"}>Fijian</MenuItem>
            <MenuItem value={"fil"}>Filipino</MenuItem>
            <MenuItem value={"fi"}>Finnish</MenuItem>
            <MenuItem value={"fr"}>French</MenuItem>
            <MenuItem value={"de"}>German</MenuItem>
            <MenuItem value={"el"}>Greek</MenuItem>
            <MenuItem value={"ht"}>Haitian Creole</MenuItem>
            <MenuItem value={"he"}>Hebrew</MenuItem>
            <MenuItem value={"hi"}>Hindi</MenuItem>
            <MenuItem value={"mww"}>Hmong Daw</MenuItem>
            <MenuItem value={"hu"}>Hungarian</MenuItem>
            <MenuItem value={"id"}>Indonesian</MenuItem>
            <MenuItem value={"it"}>Italian</MenuItem>
            <MenuItem value={"ja"}>Japanese</MenuItem>
            <MenuItem value={"sw"}>Kiswahili</MenuItem>
            <MenuItem value={"tlh"}>Klingon</MenuItem>
            <MenuItem value={"ko"}>Korean</MenuItem>
            <MenuItem value={"lv"}>Latvian</MenuItem>
            <MenuItem value={"lt"}>Lithuanian</MenuItem>
            <MenuItem value={"mg"}>Malagasy</MenuItem>
            <MenuItem value={"ms"}>Malay</MenuItem>
            <MenuItem value={"mt"}>Maltese</MenuItem>
            <MenuItem value={"nb"}>Norwegian</MenuItem>
            <MenuItem value={"pl"}>Polish</MenuItem>
            <MenuItem value={"pt"}>Portuguese</MenuItem>
            <MenuItem value={"otq"}>Querétaro Otomi</MenuItem>
            <MenuItem value={"ro"}>Romanian</MenuItem>
            <MenuItem value={"ru"}>Russian</MenuItem>
            <MenuItem value={"sm"}>Samoan</MenuItem>
            <MenuItem value={"sr-Cyrl"}>Serbian (Cyrillic)</MenuItem>
            <MenuItem value={"sr-Latn"}>Serbian (Latin)</MenuItem>
            <MenuItem value={"sk"}>Slovak</MenuItem>
            <MenuItem value={"sl"}>Slovenian</MenuItem>
            <MenuItem value={"es"}>Spanish</MenuItem>
            <MenuItem value={"sv"}>Swedish</MenuItem>
            <MenuItem value={"ty"}>Tahitian</MenuItem>
            <MenuItem value={"ta"}>Tamil</MenuItem>
            <MenuItem value={"th"}>Thai</MenuItem>
            <MenuItem value={"to"}>Tongan</MenuItem>
            <MenuItem value={"tr"}>Turkish</MenuItem>
            <MenuItem value={"uk"}>Ukrainian</MenuItem>
            <MenuItem value={"ur"}>Urdu</MenuItem>
            <MenuItem value={"vi"}>Vietnamese</MenuItem>
            <MenuItem value={"cy"}>Welsh</MenuItem>
            <MenuItem value={"yua"}>Yucatec Maya</MenuItem>
          </Select>
        </FormControl>
      </form>
    );
  }
}

SimpleSelect.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleSelect);