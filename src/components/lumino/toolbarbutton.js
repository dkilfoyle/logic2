
  
export namespace ToolbarButtonComponent {
  /**
   * Interface for ToolbarButttonComponent props.
   */
  export interface IProps {
    className?;
    label?;
    icon?: LabIcon.IMaybeResolvable;
    iconClass?;
    iconLabel?;
    tooltip?;
    onClick?: () => void;
    enabled?;

    /**
     * Trigger the button on the actual onClick event rather than onMouseDown.
     *
     * See note in ToolbarButtonComponent below as to why the default is to
     * trigger on onMouseDown.
     */
    actualOnClick?;

    /**
     * The application language translator.
     */
    translator?: ITranslator;
  }
}

/**
 * React component for a toolbar button.
 *
 * @param props - The props for ToolbarButtonComponent.
 */
export function ToolbarButtonComponent(propsoolbarButtonComponent.IProps) {
  // In some browsers, a button click event moves the focus from the main
  // content to the button (see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button#Clicking_and_focus).
  // We avoid a click event by calling preventDefault in mousedown, and
  // we bind the button action to `mousedown`.
  const handleMouseDown = (event: React.MouseEvent) => {
    // Fire action only when left button is pressed.
    if (event.button === 0) {
      event.preventDefault();
      props.onClick?.();
    }
  };

  const handleKeyDown = (event: React.KeyboardEvent) => {
    const { key } = event;
    if (key === 'Enter' || key === ' ') {
      props.onClick?.();
    }
  };

  const handleClick = (event: React.MouseEvent) => {
    if (event.button === 0) {
      props.onClick?.();
    }
  };

  return (
    <Button
      className={
        props.className
          ? props.className + ' jp-ToolbarButtonComponent'
          : 'jp-ToolbarButtonComponent'
      }
      disabled={props.enabled === false}
      onClick={props.actualOnClick ?? false ? handleClick : undefined}
      onMouseDown={
        !(props.actualOnClick ?? false) ? handleMouseDown : undefined
      }
      onKeyDown={handleKeyDown}
      title={props.tooltip || props.iconLabel}
      minimal
    >
      {(props.icon || props.iconClass) && (
        <LabIcon.resolveReact
          icon={props.icon}
          iconClass={
            // add some extra classes for proper support of icons-as-css-backgorund
            classes(props.iconClass, 'jp-Icon')
          }
          className="jp-ToolbarButtonComponent-icon"
          tag="span"
          stylesheet="toolbarButton"
        />
      )}
      {props.label && (
        <span className="jp-ToolbarButtonComponent-label">{props.label}</span>
      )}
    </Button>
  );
}

/**
 * Adds the toolbar button class to the toolbar widget.
 * @param w Toolbar button widget.
 */
export function addToolbarButtonClass(w) {
  w.addClass('jp-ToolbarButton');
  return w;
}

/**
 * Phosphor Widget version of static ToolbarButtonComponent.
 */
export class ToolbarButton extends ReactWidget {
  /**
   * Creates a toolbar button
   * @param props props for underlying `ToolbarButton` componenent
   */
  constructor(propsoolbarButtonComponent.IProps = {}) {
    super();
    addToolbarButtonClass(this);
  }
  render() {
    return <ToolbarButtonComponent {...this.props} />;
  }
}

/**
 * Namespace for CommandToolbarButtonComponent.
 */
export namespace CommandToolbarButtonComponent {
  /**
   * Interface for CommandToolbarButtonComponent props.
   */
  export interface IProps {
    commands: CommandRegistry;
    id;
    args?: ReadonlyJSONObject;
  }
}

/**
 * React component for a toolbar button that wraps a command.
 *
 * This wraps the ToolbarButtonComponent and watches the command registry
 * for changes to the command.
 */
export function CommandToolbarButtonComponent(
  props: CommandToolbarButtonComponent.IProps
) {
  return (
    <UseSignal
      signal={props.commands.commandChanged}
      shouldUpdate={(sender, args) =>
        (args.id === props.id && args.type === 'changed') ||
        args.type === 'many-changed'
      }
    >
      {() => <ToolbarButtonComponent {...Private.propsFromCommand(props)} />}
    </UseSignal>
  );
}

/*
 * Adds the command toolbar button class to the command toolbar widget.
 * @param w Command toolbar button widget.
 */
export function addCommandToolbarButtonClass(w) {
  w.addClass('jp-CommandToolbarButton');
  return w;
}

/**
 * Phosphor Widget version of CommandToolbarButtonComponent.
 */
export class CommandToolbarButton extends ReactWidget {
  /**
   * Creates a command toolbar button
   * @param props props for underlying `CommandToolbarButtonComponent` componenent
   */
  constructor(props: CommandToolbarButtonComponent.IProps) {
    super();
    addCommandToolbarButtonClass(this);
  }
  render() {
    return <CommandToolbarButtonComponent {...this.props} />;
  }
}

/**
 * A namespace for data.
 */
namespace {
  export function propsFromCommand(
    options: CommandToolbarButtonComponent.IProps
  )oolbarButtonComponent.IProps {
    const { commands, id, args } = options;

    const iconClass = commands.iconClass(id, args);
    const iconLabel = commands.iconLabel(id, args);
    // DEPRECATED: remove _icon when lumino 2.0 is adopted
    // if icon is aliasing iconClass, don't use it
    const _icon = commands.icon(id, args);
    const icon = _icon === iconClass ? undefined : _icon;

    const label = commands.label(id, args);
    let className = commands.className(id, args);
    // Add the boolean state classes.
    if (commands.isToggled(id, args)) {
      className += ' lm-mod-toggled';
    }
    if (!commands.isVisible(id, args)) {
      className += ' lm-mod-hidden';
    }
    const tooltip = commands.caption(id, args) || label || iconLabel;
    const onClick = () => {
      void commands.execute(id, args);
    };
    const enabled = commands.isEnabled(id, args);

    return { className, icon, iconClass, tooltip, onClick, enabled, label };
  }



 