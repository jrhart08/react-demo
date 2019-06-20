import { connect } from 'react-redux';
import reject from 'lodash/reject';
import { getSkuMap } from '../actions/skuMapActions';
import { updatePath } from '../actions/pathActions';
import { getChoicePathsIfSelected } from '../utils/pathUtils';

const getHrefsForChoices = (configurator, option) => {
  const { options, choices } = configurator;
  const prefix = window.location.pathname.split('/', 5).join('/');
  const configLinks = option.choices.reduce((obj, choiceId) => {
    // eslint-disable-next-line no-param-reassign
    obj[choiceId] = `${prefix}/${getChoicePathsIfSelected(options, choices, choiceId).join('/')}`;
    return obj;
  }, {});
  return configLinks;
};

const mapStateToProps = ({ configurator, product }, { option }) => ({
  choices: reject(option.choices.map(it => configurator.choices[it]), 'isDisabled'),
  attributes: product.details.attributes,
  options: configurator.options,
  productChoices: configurator.choices,
  configLinks: getHrefsForChoices(configurator, option),
});

const mapDispatchToProps = dispatch => ({
  onChoiceSelectedSuccess: () => {
    dispatch(updatePath());
    dispatch(getSkuMap());
  },
});

const makeConfiguratorTemplate = component => connect(
  mapStateToProps,
  mapDispatchToProps,
)(component);

export default makeConfiguratorTemplate;
