//credit goes to Steven Frank of Cloud to Butt (https://github.com/panicsteve/cloud-to-butt/)

walk(document.body);

function walk(node)
{
	var child, next;

	switch (node.nodeType)
	{
		case 1:
		case 9:
		case 11:
			child = node.firstChild;
			while ( child )
			{
				next = child.nextSibling;
				walk(child);
				child = next;
			}
			break;

		case 3:
			handleText(node);
			break;
	}
}

function handleText(textNode)
{
	var v = textNode.nodeValue;
    v = v.replace(/\bur\b/g, "voi")
    v = v.replace(/\bUR\b/g, "VOI")
    v = v.replace(/\bUr\b/g, "Voi")

	textNode.nodeValue = v;
}
