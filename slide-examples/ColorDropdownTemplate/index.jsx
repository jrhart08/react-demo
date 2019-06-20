import React from 'react';
import PropTypes from 'prop-types';
import flow from 'lodash/flow';
import find from 'lodash/find';
import camelCase from 'lodash/camelCase';
import { shouldHideOption } from '@gcc/configurator';
import ThdSelectWithImage from '@gcc/pip-components/dist/ThdSelectWithImage';
import Swatch from '@gcc/pip-components/dist/Swatch';
import ChoiceSectionHeader from '@gcc/pip-components/dist/ChoiceSectionHeader';
import OptionWarningMessages from '@gcc/pip-components/dist/WarningMessage';
import { OptionErrorMessages } from '@gcc/pip-components/dist/ErrorMessage';
import withIsMobile from '@gcc/pip-components/dist/withIsMobile';
import ConfiguratorTemplate from '../ConfiguratorTemplate';
import { OptionLabel } from '../OptionLabel';

class ColorDropdownTemplate extends React.Component {
  getDefinition = () => this.props.attributes[camelCase(this.props.option.shortLabel)];

  getSelectedChoice() {
    const { choices } = this.props;
    return find(choices, 'isSelected');
  }

  getHrefForChoice = (choiceId) => {
    const { configLinks } = this.props;
    return configLinks[choiceId];
  };

  colorChange = ({ id: choiceId, shortLabel: choiceValue }) => {
    const selectedChoice = this.getSelectedChoice();
    if (!selectedChoice || (selectedChoice && choiceId !== selectedChoice.id)) {
      const { option, onChoiceSelected } = this.props;
      onChoiceSelected(option.id, choiceId, choiceValue)
        .then(() => this.props.onChoiceSelectedSuccess());
    }
  };

  renderMobile = selectedChoice => (
    <ThdSelectWithImage
      value={selectedChoice}
      options={this.props.choices}
      keyBy={choice => choice.id}
      onChange={this.colorChange}
      isWrapperOpen={window.prerender}
    />
  );

  renderDesktop = selectedChoice => (
    <div className="product_sku_Overlay_ColorSwtHolder">
      <div className="sku_variant product_sku_Overlay_ColorSwatch">
        <ul>
          {this.props.choices.map(choice => (
            <Swatch
              key={choice.id}
              label={choice.shortLabel}
              imageSrc={choice.mediaUrl}
              selected={choice === selectedChoice}
              onClick={() => this.colorChange(choice)}
              href={this.getHrefForChoice(choice.id)}
            />
          ))}
        </ul>
      </div>
    </div>
  );

  render() {
    const selectedChoice = this.getSelectedChoice();
    const { option, isMobile } = this.props;
    const renderSelect = this.props.isMobile ? this.renderMobile : this.renderDesktop;
    const shouldHide = shouldHideOption(this.props.option, this.props.options, this.props.productChoices);
    return !shouldHide && (
      <div className="product_sku_Overlay_ListBoxes" style={{ margin: '1em 0 1em' }}>
        <ChoiceSectionHeader
          definitionHeader={option.shortLabel}
          definitionMarkdown={this.getDefinition()}
        >
          {OptionLabel(option.shortLabel, selectedChoice, isMobile)}
        </ChoiceSectionHeader>
        <OptionErrorMessages option={option} />
        {renderSelect(selectedChoice)}
        <OptionWarningMessages option={option} />
      </div>
    );
  }
}

ColorDropdownTemplate.propTypes = {
  choices: PropTypes.array.isRequired,
  option: PropTypes.object.isRequired,
  options: PropTypes.array.isRequired,
  productChoices: PropTypes.array.isRequired,
  onChoiceSelected: PropTypes.func.isRequired,
  onChoiceSelectedSuccess: PropTypes.func.isRequired,
  attributes: PropTypes.object.isRequired, // attributes is treated like a dictionary
  isMobile: PropTypes.bool.isRequired, // from `withIsMobile`
  configLinks: PropTypes.array.isRequired,
};

export default flow(
  // include `isMobile` prop
  withIsMobile,
  // connect to redux
  ConfiguratorTemplate,
)(ColorDropdownTemplate);
