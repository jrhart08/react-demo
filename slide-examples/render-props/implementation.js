/* eslint-disable */
// (imports)
const ChoiceBoxSelect = ({
  value,
  optionRenderer: OptionRenderer,
  options,
  ...rest
}) => {
  const selectOptions = options.map((option) => {
    // ...
    return (
      <ChoiceBox {...choiceBoxProps}>
        <OptionRenderer value={option} />
      </ChoiceBox>
    );
    // ...
  });

  return (
    <ChoiceBoxSection {...rest}>
      {selectOptions}
    </ChoiceBoxSection>
  );
};

// (prop types)

export default withSelect(ChoiceBoxSelect);








